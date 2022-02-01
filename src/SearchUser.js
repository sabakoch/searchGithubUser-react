import React, { useState } from 'react';

const SearchUser = () => {

    const [username, setUsername] = useState("");

    const onChangeHande = e => {
        setUsername(e.target.value);
    }

    const submitHandler = async e => {
        e.preventDefault();

        const apiURL = 'https://api.github.com/users/' + username;

        fetch(apiURL).then(res => res.json()).then(data => {
            const val = document. querySelector('input'). value;

            // in input is empty just nothing done
            if(val === ""){}

            else if (data.message) {
                document.getElementById('finalResult').innerHTML = ` <div class="card"><div class="cardNoUsers"><h2>there is not any github users with this name </h2></div></div>`
            }

            // hire I check has user set his name or not
            else {
                if(data.name === null){
                    document.getElementById('finalResult').innerHTML = ` <a href=${data.html_url} target="_blank"> <div class="card"><h2 class="card-title">${data.login}</h2> <img src=${data.avatar_url} /> </div> </a> `
                }
                else{
                    document.getElementById('finalResult').innerHTML = ` <a href=${data.html_url} target="_blank"> <div class="card"><h2 class="card-title">${data.name}</h2> <img src=${data.avatar_url} /> </div> </a> `
                }
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            {/* github users search input */}
            <div className='container'>

                {/* input withe button */}
                <div className='inputContainer'>
                    <input className='rowWisual' type="text" value={username} placeholder="github user" onChange={onChangeHande} id="gitinput" />
                    <button className='rowWisual button-64' onClick={submitHandler} id="btn" type="button"><span className='text'>search</span></button>
                </div>

                {/* here will pop up dive with user image and name */}
                <div id="finalResult" className='cards'></div>

            </div>
        </div>
    )
}

export default SearchUser;
