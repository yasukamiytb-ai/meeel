import React from 'react';
import { useRouter } from 'next/router';

const ProjectPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Mock data for demonstration purposes (replace with actual data retrieval)
    const project = {
        title: 'Sample Project',
        description: 'This is a description of the sample project.',
        crew: {
            Director: 'John Doe',
            'Director of Photography': 'Jane Smith',
            '1st AC': 'Mark Johnson',
            'Key Gaffer': 'Emily Davis',
            'Key Grip': 'Chris Lee',
        },
        technologies: ['React', 'Next.js', 'TypeScript'],
        images: [
            'image1_url.jpg',
            'image2_url.jpg',
            'image3_url.jpg'
        ],
        links: {
            YouTube: 'https://youtube.com/sample',
            GitHub: 'https://github.com/sample',
            demo: 'https://live-demo.sample'
        }
    };

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <h2>Crew</h2>
            <ul>
                {Object.entries(project.crew).map(([role, name]) => (
                    <li key={role}><strong>{role}:</strong> {name}</li>
                ))}
            </ul>
            <h2>Technologies</h2>
            <p>{project.technologies.join(', ')}</p>
            <h2>Image Gallery</h2>
            <div>
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Project image ${index + 1}`} />
                ))}
            </div>
            <h2>Links</h2>
            <ul>
                <li><a href={project.links.YouTube}>YouTube</a></li>
                <li><a href={project.links.GitHub}>GitHub</a></li>
                <li><a href={project.links.demo}>Live Demo</a></li>
            </ul>
        </div>
    );
};

export default ProjectPage;