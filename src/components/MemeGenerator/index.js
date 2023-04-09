import {Component} from 'react'
import {Container, Form, Button, MemeContainer} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    bottomText: '',
    topText: '',
    fontSize: '',
    isMeme: false,
  }

  formClicked = event => {
    this.setState({isMeme: true})
    event.preventDefault()
  }

  getImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  getMemegenarator = () => {
    const {imageUrl, bottomText, topText, fontSize} = this.state

    return (
      <MemeContainer imageUrl={imageUrl} fontSize={fontSize}>
        <p>{topText}</p>
        <p>{bottomText}</p>
      </MemeContainer>
    )
  }

  render() {
    const {isMeme} = this.state

    return (
      <>
        <h1>Meme Generator</h1>
        <Container data-testid="meme">
          <Form onSubmit={this.formClicked}>
            <label htmlFor="imageUrl">Image Url</label>
            <input onChange={this.getImageUrl} type="text" id="imageUrl" />
            <label htmlFor="topText">Top Text</label>
            <input onChange={this.getTopText} type="text" id="topText" />
            <label htmlFor="bottomText">Bottom Text</label>
            <input onChange={this.getBottomText} type="text" id="bottomText" />
            <label htmlFor="fontSize">Font Size</label>
            <select onChange={this.getFontSize}>
              {fontSizesOptionsList.map(eachFont => (
                <option value={eachFont.optionId} key={eachFont.optionId}>
                  {eachFont.displayText}
                </option>
              ))}
            </select>
            <Button type="submit">Generate</Button>
          </Form>
          {isMeme && <div data-testid="meme">this.getMemegenarator()</div>}
        </Container>
      </>
    )
  }
}
export default MemeGenerator
