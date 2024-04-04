<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        // // If login successful, create a cookie
        // if ($this->getUser()) {
        //     $user = $this->getUser();
        //     $cookie = new Cookie(
        //         'user_authenticated',
        //         $user->getId(),
        //         time() + 3600 
        //     );

        //     $response = new RedirectResponse('http://localhost:8090/registered');
        //     $response->headers->setCookie($cookie);

        //     return $response;
        // }

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/logged', name: 'app_logged')]
    public function logged(TokenInterface $token): Response
    {
        if ($this->isGranted('ROLE_USER')) {
            $user = $token->getUser();

            $cookieID = new Cookie(
                'user_authenticated', 
                $user->getId(), 
                time() + 3600, 
                 '/',
                  '', 
                  false, 
                  false
            );

            $cookieEmail = new Cookie(
                'user_mail', 
                $user->getUserIdentifier(), 
                time() + 3600, 
                '/',
                  '', 
                  false, 
                  false
            );

            // Créer une réponse de redirection avec le cookie
            $response = new RedirectResponse('http://localhost:8090/registered');
            $response->headers->setCookie($cookieID);
            $response->headers->setCookie($cookieEmail);
            return $response;
        }

        $response = new RedirectResponse('http://localhost:8080/login');

        return $response;
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        // Cette méthode peut être vide car la déconnexion sera gérée par Symfony.
        // Symfony interceptera cette route et effectuera la déconnexion automatiquement.
        // Il n'est pas nécessaire d'ajouter du code ici.
        // Il suffit de définir la route de déconnexion dans votre fichier security.yaml.
        throw new \LogicException('This method should not be reached.');
    }

    #[Route(path: '/logged-out', name: 'app_logged-out')]
    public function loggedOut(): Response
    {
        $response = new RedirectResponse('http://localhost:8090');
        $response->headers->clearCookie('user_authenticated');
        $response->headers->clearCookie('user_mail');
    
        return $response;
    }
    
}
