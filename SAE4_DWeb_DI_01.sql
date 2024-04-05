-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : ven. 05 avr. 2024 à 13:11
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE4_DWeb_DI_01`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Aventure'),
(3, 'Comédie'),
(4, 'Drame');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240315103001', '2024-03-18 14:20:01', 454),
('DoctrineMigrations\\Version20240315134558', '2024-03-18 14:20:02', 39),
('DoctrineMigrations\\Version20240325082414', '2024-03-25 08:24:48', 138),
('DoctrineMigrations\\Version20240402083057', '2024-04-02 08:31:42', 135),
('DoctrineMigrations\\Version20240402083753', '2024-04-02 08:38:13', 97),
('DoctrineMigrations\\Version20240402085006', '2024-04-02 08:50:24', 304);

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_image` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `url_image`, `type_id`) VALUES
(1, 'Machete', 'machete.jfif', 1),
(2, 'Arrivederci amore, ciao', 'arrivederci.jfif', 1),
(3, 'Espèces menacées', 'espece-menacees.jfif', 1),
(4, 'L\'impasse', 'l\'impasse.jfif', 1),
(5, 'Rex', 'rex.jfif', 2),
(6, 'Last Resort', 'last-resort.jfif', 2),
(7, 'OPJ : Pacifique Sud', 'opj.jfif', 2),
(8, 'Charité', 'charite.jfif', 2),
(9, 'Machins Choses', 'machin-choses.jfif', 1),
(10, 'Fauda', 'fauda.jfif', 2),
(11, 'Crash', 'crash.jfif', 2),
(12, 'Hunted', 'hunted.jfif', 2),
(13, 'Nashville', 'nashville.jfif', 1),
(14, 'Egypt', 'egypt.jfif', 2),
(15, 'Mafia', 'mafia.jfif', 1),
(16, 'Montana', 'montana.jfif', 1),
(17, 'Harvey', 'harvey.jfif', 1),
(18, 'The ocean waif', 'the-ocean-waif.jfif', 1),
(19, 'À mon tour', 'a-mon-tour.jfif', 1);

-- --------------------------------------------------------

--
-- Structure de la table `movie_category`
--

CREATE TABLE `movie_category` (
  `movie_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie_category`
--

INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 3),
(6, 1),
(7, 1),
(8, 3),
(9, 1),
(10, 3),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 3),
(18, 3),
(19, 3);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Films'),
(2, 'Series'),
(3, 'Sports'),
(4, 'Enfants');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'robin.achnokzie@gmail.com', '[]', '$2y$13$TgTWNNBD1n0sgjtT3ZbDSuQZgYR0KZq39WyuF0LgxNoyFkIsm6L9q'),
(2, 'robin.achnokzi@gmail.com', '[]', '$2y$13$1HH6xtpr8AqSDfaDE4w.BepTRY1J01Tk.UnfKNvGuXO.sH7Ixpi8e'),
(3, 'ninettee@gmail.com', '[]', '$2y$13$aeU/.Uqpz2p8Hxks63xM0.aHDp02cF0RR/JofNF/675wXZMWb6wfW'),
(4, 'robin.akzie@gmail.com', '[]', '$2y$13$oU1kInchwBxxgJ6FJLmME.FeBmFx4SvtBpZCS2Vw2gB5bkcg/NnjG'),
(5, 'robin@gmail.com', '[]', '$2y$13$MIjgEQuLJldn.ocEIz54Z.oMdagLIv5Cb6tisKBacdhC6PeLwcSta'),
(6, 'r@gmail.com', '[]', '$2y$13$O5jDke2aHbhISHA/VHlDXe6/cdahTTiBrkkMi4i64C6gdxlYADF4a'),
(7, 'nino@gmail.com', '[]', '$2y$13$Y8wXNMPfclv5F7pQzlycrOPNOXiAFhwxeIK0XYK19m3SIc9ZdwB/q'),
(8, 't@gmail.com', '[]', '$2y$13$MnEMp3C7T8rU01KbgjqnN.LrTBNflm2FuakSC2StoW2A5uYiuARcC'),
(9, 'm@gmail.com', '[]', '$2y$13$B6i3YrUm0vcNauWCJe3Hie2ms6zfAFaCQZX19x.Go7FYI1ZZhdqpS'),
(10, 'mathis.micheau14@gmail.com', '[]', '$2y$13$nwUU6UA8jV0OhR/9n6iYBO1YxJlZZ2JyqmWVTTWa5teotJBcnqSeu'),
(11, 'mathis.micheau@gmail.com', '[]', '$2y$13$w/Han7ftJkoDbMnTQeVniuhR1WiS555jcbcAgz3dfRFLOxxFWIigy');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1D5EF26FC54C8C93` (`type_id`);

--
-- Index pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD PRIMARY KEY (`movie_id`,`category_id`),
  ADD KEY `IDX_DABA824C8F93B6FC` (`movie_id`),
  ADD KEY `IDX_DABA824C12469DE2` (`category_id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `FK_1D5EF26FC54C8C93` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`);

--
-- Contraintes pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD CONSTRAINT `FK_DABA824C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DABA824C8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
