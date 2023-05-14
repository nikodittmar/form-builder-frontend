import { IconContext } from "react-icons"

export default function ComponentListItem(props) {


    return (
        <IconContext.Provider value={{ size: '24px', weight: '400' }}>
            <div className="component-list-item" onClick={props.onClick}>
                <div className="icon">{props.type.icon}</div>
                <p className="name">{props.type.name}</p>  
                <style jsx>{`
                    .component-list-item {
                        background-color: var(--secondary-bg-color);
                        border: var(--border);
                        border-radius: 10px;
                        margin-bottom: 8px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        transition: 0.2s ease-in-out;
                    }

                    .component-list-item:hover {
                        transform: scale(1.02);
                    }

                    .name {
                        margin:0;
                        font-size: 1.1rem;
                    }

                    .icon {
                        padding: 8px;
                        border-radius: 10px;
                        background-color: #F0F0F0;
                        margin-left: 10px;
                        margin-right:10px;
                    }      
                `}</style>  
            </div>
        </IconContext.Provider>
    )
}