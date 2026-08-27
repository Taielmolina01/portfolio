import './toggle.scss'

function Toggle({ selectedOption, setOption }) {
    const englishOption = 'en';
    const spanishOption = 'es';
    const englishIsSelected = selectedOption === englishOption; 

    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


    return (
        <div className='toggle-container'>
            <button 
                className={englishIsSelected ? 'selected' : ''} 
                onClick={() => setOption(englishOption)}
            >
                {capitalize(englishOption)}
            </button>
            <button 
                className={englishIsSelected ? '' : 'selected'} 
                onClick={() => setOption(spanishOption)}
            >
                {capitalize(spanishOption)}
            </button>
        </div>
    )
}

export default Toggle;