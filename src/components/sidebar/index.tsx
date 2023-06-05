import React, { FC, useEffect, useState } from 'react';
import { ContainerAside } from './style';
import { FaHome, FaArchive, FaComment } from "react-icons/fa"
import clsx from 'clsx';

type ItemProps = {
  icon: any;
  url: string;
  title: string;
};

const Items = [
  {
    icon: <FaHome />,
    url: '#',
    title: 'Início',
  },
  {
    icon: <FaArchive />,
    url: '#repositories',
    title: 'Repositorios'
  },
  {
    icon: <FaComment />,
    url: '#contact',
    title: 'Contato'
  },
]

const Item: FC<ItemProps> = ({
  icon,
  url,
  title,
}) => (
  <li>
    <a href={url} title={title}>
      {icon}
    </a>
  </li>
)

const Sidebar: React.FC = () => {

  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ContainerAside className={clsx([
      offset > 200 ? 'offset' : ''
    ])}>
      <nav className='containerNav'>
        <ul className='listNav'>
          {Items.map(item => (
            <Item
              icon={item.icon}
              url={item.url}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
    </ContainerAside>
  )
}

export default Sidebar;
