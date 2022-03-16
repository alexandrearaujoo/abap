import {Container, Button, SidebarContainer, Logo, SlickBar, Item, Text, Profile, Details, Logout, Name} from './style'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'


const Sidebar = () => {

    const history = useHistory()

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const [profileClick, setprofileClick] = useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);

    return (
        <>
           <Container>
      <Button clicked={click} onClick={() => handleClick()} />
      <SidebarContainer>
        <Logo>
          <img alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => {
              setClick(false)
              history.push('/associados')
            }}
            activeClassName="active"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/conference-call.png" alt='Associados'/>
            <Text clicked={click}>Associados</Text>
          </Item>
          <Item
            onClick={() => {
              history.push('/gerenciamento')
            }}
            activeClassName="active"
          >
            <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-withdraw-money-and-payment-kosonicon-solid-kosonicon.png" alt='Gerenciar Pagamentos'/>
            <Text clicked={click}>Gerenciar Pagamentos</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false) 
              history.push('/cadastros')
            }}
            activeClassName="active"
          >
            <img src="https://img.icons8.com/external-others-iconmarket/64/000000/external-register-online-learning-others-iconmarket-2.png" alt='Cadastrar Associados'/>
            <Text clicked={click}>Cadastrar Associados</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Jhon&nbsp;Doe</h4>
              <a href="/#">view&nbsp;profile</a>
            </Name>

            <Logout>
            <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-power-button-user-interface-tanah-basah-glyph-tanah-basah.png" alt='PowerOff'/>
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
        </>
    )
}

export default Sidebar 