export default function Nav() {
    return (
        <div className="nav">

            <style jsx>{`
                .nav {
                    width: 100%;
                    height: var(--nav-height);
                    background-color: var(--secondary-bg-color);
                    border-bottom: var(--border);
                    filter: drop-shadow(0px 2px 3px #00000016);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}