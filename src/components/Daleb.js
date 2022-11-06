import "../css/styles.css";

const daleb = () => {

    const daleb =["https://media.giphy.com/media/FLm1cCVmEYYF8lH3E7/giphy.gif","https://media.giphy.com/media/03j1mMwNwg2uRBaJfT/giphy.gif","https://media.giphy.com/media/mfJplFQI0vabe9FzGV/giphy.gif","https://media.giphy.com/media/UneG0XGqIRWDaK6UdN/giphy.gif","https://media.giphy.com/media/HSnLHWvXfdTqQeOiK5/giphy.gif","https://media.giphy.com/media/oTCTJkhCzxufwxqZ3p/giphy.gif","https://media.giphy.com/media/o0wqZcMUuHQ9Y5fJti/giphy.gif","https://media.giphy.com/media/hGDQnjiHRKM8cLLg2W/giphy.gif"
]
    let index = Math.floor(Math.random()*daleb.length);
    return (
        <div className="daleb">
            <img 
            src={daleb[index]} 
            alt="Daleb"/>
        </div>
        

    )
}

export default daleb;