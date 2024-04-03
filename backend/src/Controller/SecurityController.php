<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    // #[Route(path: '/login', name: 'app_login')]
    // public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    // {
    //     $username = $request->request->get('username');
    //     $password = $request->request->get('password');

    //     // Vous pouvez maintenant utiliser $username et $password pour effectuer l'authentification

    //     // Exemple de vérification simplifiée
    //     if ($username === 'admin' && $password === 'password') {
    //         // Authentification réussie
    //         // Rediriger l'utilisateur vers une autre page, par exemple
    //         return $this->redirectToRoute('dashboard');
    //     } else {
    //         // Authentification échouée
    //         // Réafficher la page de connexion avec un message d'erreur
    //         return $this->redirectToRoute('app_login', [
    //             'error' => 'Identifiants invalides'
    //         ]);
    //     }
    // }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
