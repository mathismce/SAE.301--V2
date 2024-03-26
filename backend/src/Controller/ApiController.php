<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Movie;
use App\Entity\Category;
use App\Repository\MovieRepository;

class ApiController extends AbstractController
{
    // #[Route('/api/movie/{id}', name: 'app_api')]
    // public function index(): Response
    // {
    //     return $this->render('api/index.html.twig', [
    //         'controller_name' => 'ApiController',
    //     ]);
    // }

    #[Route('/api/movie', name: 'app_api_movie')]
    public function readMovie(SerializerInterface $serializer, MovieRepository $movieRepository ): Response
    {
    $data = $serializer->normalize($movieRepository->findAll(), null, ['groups' => 'json_movie']);
    $response = new JsonResponse( $data );
    return $response;
    }

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
    $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
    $response = new JsonResponse( $data );
    return $response;
    }



}
