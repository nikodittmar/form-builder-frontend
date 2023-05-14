import Nav from '@/components/forms/nav'
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Forms(props) {

    const router = useRouter();
    const createForm = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/forms`, {
                method: 'POST',
                body: JSON.stringify({ "name": "", "title": "", "description": "", "components": []}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            if (String(response.status).startsWith('2')) {
                await router.push(`/forms/${await data.id}/builder`)
            } else {
                console.log(response.status);
                console.log(await response.json());
            }
        } catch {
            console.log("We ran into an unexpected error. Try again later.");
            
        }
    }

    return (
        <div>
            <Nav />
            <div className="forms-list">
                <div className="header">
                    <h1 className="title">Forms</h1>
                    <button className="btn btn-primary" onClick={createForm}>New Form</button>
                </div>
                {
                    props.data.map( form => {
                        return (
                            <div className="form" key={form.id}>
                                <h3 className="name">{form.name}</h3>
                                <div className="actions-container">
                                    <p className="action"><Link href={`/forms/${form.id}/builder`} >Edit</Link></p>
                                    <p className="action"><a>Delete</a></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>{`
                .forms-list {
                    max-width: 1000px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 20px;
                }
                .header {
                    width: 100%;
                    display: flex;
                    height: var(--nav-height);
                    align-items: center;
                    justify-content: space-between;
                }
                .title {
                    font-weight: 400;
                    margin-bottom: 0;
                    font-size: 34px;
                }
                .form {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 24px; 
                    background-color: var(--secondary-bg-color);
                    border-radius: 8px;
                    border: var(--border);
                    width: 100%;
                    max-width: 1000px;
                    margin-bottom: 10px;
                }
                .name {
                    margin-bottom: 0;
                    font-weight: 400;
                    font-size: 20px;
                }
                .actions-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100px;
                }
                .action {
                    margin-bottom: 0;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/forms`)
        const data = await res.json()
        if (String(res.status).startsWith('2')) {
            console.log(res)
            return { props: {data} }
        } else {
            console.log(res)
            return {
                notFound: true,
            }
        }
    } catch {
        return {
            notFound: true 
        }
    }
}