import React, { FC } from 'react';
import { ContainerAside } from './style';
import { FaHome, FaArchive} from "react-icons/fa"
type ItemProps = {
    icon: any;
    url: string;
};

const Items = [
    {
        icon: <FaHome />,
        url: '#',
    },
    {
        icon: <FaArchive />,
        url: '#respositories',
    },
]

const Item: FC<ItemProps> = ({
    icon,
    url,
}) => (
    <li>
        <a href={url}>
            {icon}
        </a>
    </li>
)

const Sidebar: React.FC = () => {
    return (
        <ContainerAside>
            <nav className='containerNav'>
                <ul className='listNav'>
                    {Items.map(item => (
                        <Item
                            icon={item.icon}
                            url={item.url}
                        />
                    ))}
                </ul>
            </nav>
        </ContainerAside>
    )
}

export default Sidebar;