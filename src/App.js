import React from 'react';
import './App.scss';


const newsItems = [
    {
        title: '367 modERN datasets released',
        excerpt: (
            <p>We are pleased to announced that a whopping 367 modERN datasets have just been released in the ENCODE portal. <a href="/search/?type=Experiment&amp;status=released&amp;award.project=modERN&amp;advancedQuery=date_released:[2016-07-01%20TO%202016-07-31]\">Click here</a> for details.</p>
        ),
    },
    {
        title: 'Release of Annotation File Sets',
        excerpt: (
            <p>With collaborations from the DAC (Data Analysis Center), a total of 336 Annotation File Sets of promoter-like and enhancer-like regions have been released. You can find them <a href="/search/?type=Annotation&amp;encyclopedia_version=ENCODE+v3&amp;advancedQuery=date_released:[2016-08-01%20TO%202016-08-31]">here</a>.</p>
        ),
    },
    {
        title: 'Mouse e10.5 Histone ChIP-seq Dataset',
        excerpt: (
            <p>Mouse e10.5 histone ChIP-seq dataset from from the Ren lab available on the portal are available <a href="http://bit.ly/29Uma1K">here</a>.</p>
        ),
    },
];


const Header = () => (
    <div className="header">
        <a href="/">
            <img src="/encode-logo.svg" />
        </a>
    </div>
);


const News = () => (
    <div className="news">
        <h2>News</h2>
        <div className="news__items">
            {newsItems.map(newsItem => (
                <div className="news__item">
                    <h3>{newsItem.title}</h3>
                    <div className="news__excerpt">
                        {newsItem.excerpt}
                    </div>
                </div>
            ))}
        </div>
    </div>
);


const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <p>Email</p>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <p>Password</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input id="submit" type="submit" name="submit" value="Submit" />
            </form>
        </div>
    );
};


const Content = () => (
    <div className="content">
        <News />
        <Login />
    </div>
);


const App = () => {
    return (
        <div className="page">
            <Header />
            <Content />
        </div>
    );
};

export default App;
