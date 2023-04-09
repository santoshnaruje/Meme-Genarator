// Style your components here
import Styled from 'styled-components'

export const Container = Styled.div`

@media (max-width:576px){
    display:flex;
    flex-direction:column;
}
@media (min-width:768px){
    display:flex;
    flex-wrap:wrap;
}

`
export const Form = Styled.form`
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:center:
padding:20px;
margin:20px;
width:40%;
@media (max-width:576px){
    width:80%
}

`
export const Button = Styled.button`
height:36px;
width:136px;
color:white;
background-color:blue;
border-radius:5px;
border:none;
margin-top:10px;
cursor:pointer;

`
export const MemeContainer = Styled.div`
background-image:url(${props => {
  console.log(props.imageUrl)
  return props.imageUrl
}});
display:flex;
height:50vh;
color:white;
background-size:cover;
flex-direction:column;
justify-content:space-between;
font-family:bree-serif;
font-weight:bold;
text-align:center:
font-size: ${props => props.fontSize}px;



padding:20px;
margin:20px;
width:40%;
@media (max-width:576px){
    width:80%
}
p {
    font-size: inherit;
  }

`
