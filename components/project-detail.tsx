import React from 'react';

const ProjectDetail = () => {
  const crewRoles = ['Director', 'Director of Photography', '1st AC', 'Key Gaffer', 'Key Grip'];
  const technologies = ['React', 'TypeScript', 'Node.js'];
  const imageGallery = [
    'url_to_image_1.jpg',
    'url_to_image_2.jpg',
    'url_to_image_3.jpg'
  ];
  const links = [
    { name: 'Project Website', url: 'https://projectwebsite.com' },
    { name: 'GitHub Repo', url: 'https://github.com/user/repo' },
  ];

  return (
    <div>
      <h1>Project Detail</h1>
      <h2>Crew Roles</h2>
      <ul>
        {crewRoles.map(role => <li key={role}>{role}</li>) }
      </ul>
      <h2>Technologies</h2>
      <ul>
        {technologies.map(tech => <li key={tech}>{tech}</li>) }
      </ul>
      <h2>Image Gallery</h2>
      <div>
        {imageGallery.map((img, index) => (
          <img key={index} src={img} alt={`Gallery image ${index + 1}`} style={{width: '100px', margin: '10px'}} />
        ))}
      </div>
      <h2>Links</h2>
      <ul>
        {links.map(link => (
          <li key={link.name}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;