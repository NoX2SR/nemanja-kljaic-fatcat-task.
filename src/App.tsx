import './styles.css';

import { Layout } from './components/Layout.tsx';

function App() {
    return (
        <main>
            <Layout background="">
                <div
                    style={{
                        width: '50%',
                        marginLeft: '25%',
                        marginTop: '5%',
                        backgroundColor: '#DDDDDD',
                        flex: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <p
                        style={{
                            padding: 40,
                        }}
                    >
                        Hello, <br /> <br />
                        My name is Nemanja Kljaic and I wrote this code in order
                        to show my knowledge in JS, TS, React and Programming in
                        general. <br />I hope you will enjoy doing the code
                        review and I want to say thank you in advance for yotur
                        time. <br /> <br />
                        On the links bellow you will find a solution for each
                        task that I had.
                    </p>
                    <a
                        href={`/task1`}
                        style={{
                            padding: 10,
                            color: 'blue',
                        }}
                    >
                        Task 1. - Transfer the project to TypeScript
                    </a>
                    <a
                        href={`/task2`}
                        style={{
                            padding: 10,
                            color: 'blue',
                        }}
                    >
                        Task 2. - Create a List Component
                    </a>
                    <a
                        href={`/task3`}
                        style={{
                            padding: 10,
                            color: 'blue',
                        }}
                    >
                        Task 3. - Create a Form Generator Component
                    </a>
                    <a
                        href={`/task4`}
                        style={{
                            padding: 10,
                            color: 'blue',
                        }}
                    >
                        Task 4. - Create a Page Generator Component
                    </a>
                </div>
            </Layout>
        </main>
    );
}

export default App;
