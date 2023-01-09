import React, { FC, useState, useEffect } from "react";
import { Container, ContainerFullWidth, Card } from "./style";
import api from "../../services/api";

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

    useEffect(() => {
        api.get('/users/matheuspmelo/repos')
            .then(response => {
                setResporitories(response.data)
            })
    }, [])

    return (
        <ContainerFullWidth id="repositories">
            <Container>

                <h1>Projects</h1>

                <div className="container-cards">
                    {repositories.map(item => (
                        <CardItem
                            link={item.html_url}
                            title={item.name}
                            tag={item.topics}
                            tech={item.language}
                        />
                    ))}
                </div>
            </Container>
        </ContainerFullWidth>
    )
}

export default Repositories;