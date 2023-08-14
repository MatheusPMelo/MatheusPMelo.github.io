import React, { FC, useState, useEffect } from "react";
import { Container, ContainerFullWidth, Card, ContainerSeeMore } from "./style";
import api from "../../services/api";
import "aos/dist/aos.css";
import Aos from "aos";


interface IRepositories {
  html_url: string; // link
  topics: string[]; //tag
  name: string; // title
  language: string; // tech
}

interface ICardProps {
  link: string;
  tag?: string[];
  title: string;
  tech: string;
}

const CardItem: FC<ICardProps> = ({
  link,
  tag,
  title,
  tech,
}) => (
  <Card className="container-card">
    <a className="link" href={link}>
      <h2 className="title">{title}</h2>
      <div className="container-tags">
        {tag && tag.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>
      <p className="tech">{tech}</p>
    </a>
  </Card>
)

const Repositories: React.FC = () => {
  const [repositories, setResporitories] = useState<IRepositories[]>([])
  const [pagination, setPagination] = useState<number>(8)

  try {
    useEffect(() => {
      api.get('/users/matheuspmelo/repos')
        .then(response => {
          setResporitories(response.data)
        })

      Aos.init({
        duration: 1000,
      })
    }, [])
  }
  catch (error) {
    console.error(`Error: ${error}`)
  }
  function incrementRepository() {
    setPagination(pagination + 4)
  }

  return (
    <ContainerFullWidth id="repositories">
      <Container>
        <h1 data-aos="fade-right">Projects</h1>

        <div className="container-cards">
          {repositories.slice(0, pagination).map((item, index) => (
            <CardItem
              link={item.html_url}
              title={item.name}
              tag={item.topics}
              tech={item.language}
              key={index}
            />
          ))}
        </div>
        <ContainerSeeMore>
          {pagination <= repositories?.length && (
            <button onClick={incrementRepository}>See more</button>
          )}
          {pagination >= repositories?.length && (
            <h2>Isso é Tudo. Obrigado! :)</h2>
          )}
        </ContainerSeeMore>
      </Container>
    </ContainerFullWidth>
  )
}

export default Repositories;
