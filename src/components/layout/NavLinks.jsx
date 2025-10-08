import { Link, Links } from "react-router-dom";

export default function NavLinks({
    items;
    isActive;
    onItemClick;
    listClassName;
    ListProps;
}) {
    return (
        <ul className={listClassName} {...listProps}>
            {items.map((item)=>(
                <li key={item.path}>
                    <link
                    to={item.path}
                    className={`flex items-center gap-2 ${
                        isActive && isActive(item.path)
                        ? "active bg-primary text-primary-content"
                        : "hover:bg-base-200"
                    }`}
                    
                </li>
            ))}
        </ul>
    )
}