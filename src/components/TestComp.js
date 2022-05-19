import {useState} from 'react';

const TestComponent = () => {
    const [text, setText] = useState([
        {id : 1, text : '내용'},
        {id : 2, text : '메모를 만들었습니다'}
    ])

    const [inputText, setInputText] = useState("");
    const [inputId, setInputId] = useState("5");

    const deleteText = (id) => {
        const nextText = text.filter((s)=>s.id !== id);
        setText(nextText);
    }

    const getText = () => {
        const nextText2 = text.concat({
            id : inputId,
            text : inputText
        });
        setText(nextText2);
        setInputId((current)=>current+1);
    }

    const changeText = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div>
            <input
            type="text"
            onChange={changeText}
            >    
            </input>
            <button
            onClick={getText}
            >
                추가
            </button>
            <ul>
                {text.map((s)=>(
                    <li
                    key={s.id}
                    >
                        {s.text}
                        <button
                        onClick={()=>{
                            deleteText(s.id);
                        }}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestComponent;