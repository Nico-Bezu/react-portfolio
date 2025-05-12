import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => clearTimeout(timeoutId)
    }, [])

    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 92 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'React', level: 85 },
    ]

    const workExperience = [
        {
            title: 'Software Engineering Intern',
            company: 'Example Corp',
            period: 'June 2023 - August 2023',
            description: 'Developed and maintained web applications using React and Node.js'
        },
        // Add more experiences as needed
    ]

    const handleProjectUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const newProject = {
                    id: Date.now(),
                    name: file.name.split('.')[0],
                    image: event.target.result,
                    description: 'Click to edit description'
                }
                setProjects([...projects, newProject])
            }
            reader.readAsDataURL(file)
        }
    }

    const updateProjectDescription = (id, newDescription) => {
        setProjects(projects.map(project => 
            project.id === id ? {...project, description: newDescription} : project
        ))
    }

    return (
        <div className="container experience-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        idx={15}
                    />
                </h1>

                <div className="skills-container">
                    <h2>Skills & Technologies</h2>
                    <div className="skills-grid">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="skill-item">
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-level" 
                                        style={{width: `${skill.level}%`}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="work-experience">
                    <h2>Work Experience</h2>
                    {workExperience.map((exp, idx) => (
                        <div key={idx} className="experience-item">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p className="period">{exp.period}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>

                <div className="projects-section">
                    <h2>Projects</h2>
                    <div className="project-upload">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProjectUpload}
                            id="project-upload"
                            hidden
                        />
                        <label htmlFor="project-upload" className="upload-button">
                            + Add Project
                        </label>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <img src={project.image} alt={project.name} />
                                <h3>{project.name}</h3>
                                <textarea
                                    value={project.description}
                                    onChange={(e) => updateProjectDescription(project.id, e.target.value)}
                                    placeholder="Project description..."
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience