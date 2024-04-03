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
use App\Entity\Type;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends AbstractController
{
    // #[Route('/api/movie/{id}', name: 'app_api')]
    // public function index(): Response
    // {
    //     return $this->render('api/index.html.twig', [
    //         'controller_name' => 'ApiController',
    //     ]);
    // }

    #[Route('/api/movie', name: 'app_api_movie', methods:['GET'])]
    public function readMovie(SerializerInterface $serializer, MovieRepository $movieRepository): Response
    {
        $data = $serializer->normalize($movieRepository->findAll(), null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }


    #[Route('/api/category/{id}', name: 'app_api_category', methods:['GET'])]
    public function readCategory(Category $cat, SerializerInterface $serializer): Response
    {
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        $response = new JsonResponse($data);
        return $response;
    }


    #[Route('/api/movie/type/{id}', name: 'app_api_type', methods:['GET'])]
    public function readType(Type $type, SerializerInterface $serializer, MovieRepository $movieRepository): Response
    {
        $movies = $movieRepository->findBy(['type' => $type]);
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }


    #[Route('/api/searchContent', name: 'app_api_search', methods:['GET'])]
    public function search(Request $request, SerializerInterface $serializer, MovieRepository $movieRepository): Response
    {

        $content = $request->query->get('search');

        $movies = $movieRepository->findForSearch($content);
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }
}
