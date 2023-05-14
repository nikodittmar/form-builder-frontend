import { useEffect, useRef, useState } from 'react'

export default function Nav(props) {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)

    const handleChangeAndSize = (event) => {
        event.target.style.width = '170px';
        event.target.style.width = `${event.target.scrollWidth + 10}px`;
        props.setFormName(event.target.value)
     };

    useEffect(() => {
        setWidth(ref.current.scrollWidth + 10)
    }, []);

    return (
        <div className="nav">
            <div className="brand">

            </div>
            <div className="name">
                <input ref={ref} type="text" className="form-control name-input" style={{width: width + 'px'}}placeholder='Untitled Form' onChange={(event) => handleChangeAndSize(event)} value={props.formName}/>
            </div>
            <div className="actions">
                <p className="save-notification">All Changes Saved</p>
                <button onClick={props.onClickFinish}className="btn btn-primary finish-button">Finish</button>
            </div>
            <style jsx>{`
                .nav {
                    width: 100%;
                    height: var(--nav-height);
                    background-color: var(--secondary-bg-color);
                    border-bottom: var(--border);
                    filter: drop-shadow(0px 2px 3px #00000016);
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }

                .name {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                .name-input {
                    width: 170px;
                    text-align: center;
                    font-size: 24px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                    border: 1px solid #FFFFFF;
                }

                .name-input:hover {
                    border: var(--border);
                }

                .name-input:focus {
                    border: 1px solid rgba(0, 126, 194, 0.5);
                }

                
                .finish-button {
                    margin-right: 13px;
                }
                .save-notification {
                    margin-bottom: 0px;
                    margin-right: 10px;
                    color: #b9b9b9;
                    font-size: 14px;
                }


            `}</style>
        </div>
    )
}