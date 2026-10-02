<?php

namespace Database\Seeders;

use App\Domain\Project\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->projects() as $index => $item) {
            $cover = $this->copyImage($item['image']);

            $project = Project::query()->updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'title' => $item['title'],
                    'category' => $item['category'],
                    'client' => $item['client'],
                    'status' => $item['status'],
                    'contract_value' => $item['contractValue'],
                    'duration' => $item['duration'],
                    'role' => $item['role'],
                    'location' => $item['location'],
                    'description' => $item['description'],
                    'full_description' => $item['fullDescription'],
                    'cover_path' => $cover,
                    'sort_order' => $index + 1,
                    'is_published' => true,
                ],
            );

            $project->images()->delete();

            foreach ($item['gallery'] as $galleryIndex => $filename) {
                $project->images()->create([
                    'path' => $this->copyImage($filename, 'projects/gallery'),
                    'sort_order' => $galleryIndex,
                ]);
            }
        }
    }

    private function copyImage(string $filename, string $directory = 'projects/covers'): string
    {
        $source = dirname(base_path()).DIRECTORY_SEPARATOR.'my-site'.DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR.'images'.DIRECTORY_SEPARATOR.$filename;
        $extension = pathinfo($filename, PATHINFO_EXTENSION) ?: 'jpg';
        $target = $directory.'/'.Str::slug(pathinfo($filename, PATHINFO_FILENAME)).'.'.$extension;
        $absoluteTarget = storage_path('app/public/'.$target);

        File::ensureDirectoryExists(dirname($absoluteTarget));

        if (is_file($source) && ! is_file($absoluteTarget)) {
            File::copy($source, $absoluteTarget);
        }

        return $target;
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function projects(): array
    {
        return [
            [
                'slug' => 'ras-ghumais-road',
                'title' => 'Rehabilitation of Ras Ghumais Road to Ghagha Island After Checkpoint',
                'category' => 'Coastal Road & Revetment Works',
                'client' => 'DRM',
                'status' => 'Ongoing',
                'contractValue' => 'AED 33,005,354',
                'duration' => 'Jan 2025 – Jan 2026',
                'role' => 'Main Contractor',
                'location' => 'Ras Ghumais – Ghagha Island, Al Dhafrah',
                'description' => 'Rehabilitation and upgrading of the coastal road corridor leading to Ghagha Island, incorporating robust rock armour revetment and roadway strengthening.',
                'fullDescription' => [
                    'This project involved the rehabilitation and upgrading of the Ras Ghumais Road corridor leading to Ghagha Island, following the checkpoint area, aimed at improving accessibility, structural integrity, and long-term roadway performance in a remote coastal region.',
                    'The works were executed for DRM, under the consultancy supervision of ACE International, and required detailed coordination, technical precision, and compliance with roadway and marine-adjacent infrastructure standards. The scope included road rehabilitation, structural strengthening, and associated civil works to enhance safe and reliable transportation connectivity.',
                    'As the Main Contractor, the project was delivered within the contract value of AED 33,005,354, with execution aligned to project specifications and quality standards, ensuring durable infrastructure performance in challenging environmental conditions.',
                ],
                'image' => 'our-works-2nd-image.jpg',
                'gallery' => [
                    'our-works-2nd-image.jpg',
                    'Breakwaters-n-Jetties.jpg',
                    'casual-defense.jpg',
                    'our-works-3rd-image.jpg',
                    'our-works-first-image.jpg',
                ],
            ],
            [
                'slug' => 'surf-ranch-wave-basin',
                'title' => 'Surf Ranch – Armour Laying at Wave Basin',
                'category' => 'Coastal Defence',
                'client' => 'Modon Properties',
                'status' => 'Completed',
                'contractValue' => 'AED 18,500,000',
                'duration' => 'Mar 2024 – Nov 2024',
                'role' => 'Specialist Marine Contractor',
                'location' => 'Hudayriyat Island, Abu Dhabi',
                'description' => 'Precision rock armour installation and specialized wave basin foundation engineering to withstand high dynamic wave action.',
                'fullDescription' => [
                    'The Surf Ranch Abu Dhabi project required specialized rock armour placement and foundation engineering within the wave basin to endure dynamic hydrodynamic forces.',
                    'Our team deployed specialist marine excavators and GPS-guided placement systems to achieve strict tolerances required for artificial wave generation facilities.',
                    'Delivered with zero lost-time incidents and full environmental compliance in coordination with master development authorities.',
                ],
                'image' => 'our-works-3rd-image.jpg',
                'gallery' => [
                    'our-works-3rd-image.jpg',
                    'our-works-4th-image.jpg',
                    'casual-defense.jpg',
                    'our-works-first-image.jpg',
                    'Breakwaters-n-Jetties.jpg',
                ],
            ],
            [
                'slug' => 'deepwater-breakwaters-revetment',
                'title' => 'Deepwater Breakwaters & Rock Revetment Programme',
                'category' => 'Breakwaters & Jetties',
                'client' => 'Abu Dhabi Ports Authority',
                'status' => 'Completed',
                'contractValue' => 'AED 42,800,000',
                'duration' => 'Jan 2023 – Dec 2024',
                'role' => 'Main Marine Contractor',
                'location' => 'Al Dhafra Coast, Arabian Gulf',
                'description' => 'Engineered rock armour placement and heavy breakwater development built to dissipate severe wave energy and protect coastal assets.',
                'fullDescription' => [
                    'Construction of deepwater rubble-mound breakwaters and shoreline revetments to protect offshore berthing channels and port terminals from severe storm surges.',
                    'The project utilized high-density rock core materials and precision-placed concrete armour units designed for high-energy wave environments.',
                    'Completed ahead of schedule with robust quality assurance and round-the-clock bathymetric monitoring.',
                ],
                'image' => 'Breakwaters-n-Jetties.jpg',
                'gallery' => [
                    'Breakwaters-n-Jetties.jpg',
                    'our-works-2nd-image.jpg',
                    'Dredging-n-Earthworks.jpg',
                    'Marinas Quay Walls.jpg',
                    'our-works-4th-image.jpg',
                ],
            ],
            [
                'slug' => 'commercial-port-dredging',
                'title' => 'Commercial Port Dredging & Basin Reclamation',
                'category' => 'Dredging & Earthworks',
                'client' => 'Industrial City of Abu Dhabi (ICAD)',
                'status' => 'Completed',
                'contractValue' => 'AED 29,400,000',
                'duration' => 'Feb 2024 – Oct 2024',
                'role' => 'Main Contractor',
                'location' => 'Musaffah Industrial Channel, Abu Dhabi',
                'description' => 'Port and waterway dredging, canal bank protection, and deep-water navigational channel development.',
                'fullDescription' => [
                    'Capital dredging and channel deepening to expand heavy vessel navigation access into the Musaffah industrial port corridor.',
                    'Extensive environmental containment systems were implemented to protect adjacent marine ecosystems and water quality during dredging operations.',
                    'Reclaimed dredged material was repurposed for industrial land formation in compliance with local environmental regulations.',
                ],
                'image' => 'Dredging-n-Earthworks.jpg',
                'gallery' => [
                    'Dredging-n-Earthworks.jpg',
                    'Marinas Quay Walls.jpg',
                    'Pilling Works.jpg',
                    'Marine Pipeline.jpg',
                    'our-works-first-image.jpg',
                ],
            ],
            [
                'slug' => 'marinas-quay-wall-construction',
                'title' => 'Marinas & Precision Quay Wall Construction',
                'category' => 'Quay Walls',
                'client' => 'Maritime Development Group',
                'status' => 'Completed',
                'contractValue' => 'AED 24,600,000',
                'duration' => 'Jun 2023 – May 2024',
                'role' => 'Main Contractor',
                'location' => 'Abu Dhabi Commercial Harbours',
                'description' => 'Precision precast blockwork quay wall construction for marinas and commercial harbours built for maximum operational efficiency.',
                'fullDescription' => [
                    'Design verification and construction of precast concrete blockwork quay walls, capping beams, and berthing fenders for luxury marinas.',
                    'Incorporated cathodic protection and high-durability marine concrete to maximize operational lifecycle in saline coastal waters.',
                    'Delivered turnkey berthing solutions accommodating private vessels and commercial service fleets.',
                ],
                'image' => 'Marinas Quay Walls.jpg',
                'gallery' => [
                    'Marinas Quay Walls.jpg',
                    'Pilling Works.jpg',
                    'our-works-3rd-image.jpg',
                    'our-works-2nd-image.jpg',
                    'Breakwaters-n-Jetties.jpg',
                ],
            ],
            [
                'slug' => 'offshore-marine-piling-works',
                'title' => 'Offshore Marine Piling & Foundation Works',
                'category' => 'Piling Works',
                'client' => 'National Infrastructure Authority',
                'status' => 'Completed',
                'contractValue' => 'AED 31,200,000',
                'duration' => 'Aug 2023 – Jul 2024',
                'role' => 'Specialist Piling Contractor',
                'location' => 'Arabian Gulf Coastal Waters',
                'description' => 'Specialist marine piling programmes delivered with certified hydraulic equipment, experienced crews, and strict quality control.',
                'fullDescription' => [
                    'Heavy marine piling execution utilizing specialized jack-up barges and crane vessels for deep marine foundation support.',
                    'High-load tubular steel piles and reinforced concrete piles driven to deep refusal layers for offshore platform support.',
                    'Rigorous dynamic load testing and non-destructive integrity evaluations conducted across all driven piles.',
                ],
                'image' => 'Pilling Works.jpg',
                'gallery' => [
                    'Pilling Works.jpg',
                    'Marine Pipeline.jpg',
                    'our-works-4th-image.jpg',
                    'Dredging-n-Earthworks.jpg',
                    'our-works-first-image.jpg',
                ],
            ],
            [
                'slug' => 'subsea-marine-pipeline-installation',
                'title' => 'Subsea Marine Pipeline & Trenching Works',
                'category' => 'Pipelines',
                'client' => 'Energy Utilities Abu Dhabi',
                'status' => 'Completed',
                'contractValue' => 'AED 38,900,000',
                'duration' => 'Jan 2024 – Nov 2024',
                'role' => 'Main Contractor',
                'location' => 'ICAD 1 Maritime Corridor, UAE',
                'description' => 'Design and installation of industrial marine pipelines meeting stringent environmental, safety, and operational criteria.',
                'fullDescription' => [
                    'Offshore pipeline pulling, seabed trenching, and protective rock backfilling for critical marine utility transmission lines.',
                    'Advanced diver-assisted and ROV bathymetric tracking ensured precise alignment across complex seabed terrain.',
                    'Hydrotested and certified in full compliance with international maritime safety codes.',
                ],
                'image' => 'Marine Pipeline.jpg',
                'gallery' => [
                    'Marine Pipeline.jpg',
                    'Pilling Works.jpg',
                    'Dredging-n-Earthworks.jpg',
                    'our-works-first-image.jpg',
                    'our-works-2nd-image.jpg',
                ],
            ],
        ];
    }
}
