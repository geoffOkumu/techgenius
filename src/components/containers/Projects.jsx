import React from 'react'
import styled from 'styled-components'

import Container from '../widgets/Container'

const Projects = ({ projects }) => {
  // const images = projects.map(i => i.image)
  return (
    <ProjectsWrapper>
      <Container maxWidth={720}>
        <ProjectCard />
      </Container>
    </ProjectsWrapper>
  )
}

export default Projects

const ProjectsWrapper = styled.section`
  padding-bottom: 100px;
`

const ProjectCard = styled.div`
  height: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
`
