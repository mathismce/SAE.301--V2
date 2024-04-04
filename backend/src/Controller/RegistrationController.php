<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            // do anything else you need here, like send an email

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

            $response = new RedirectResponse('http://localhost:8090/registered');
            $response->headers->setCookie($cookieID);
            $response->headers->setCookie($cookieEmail);
            return $response;
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }

 

    
 
}
