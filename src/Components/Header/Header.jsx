import { Box, Button, Container, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
// import athena_logo from '../assets/athena_logo.svg'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../api/Registeration'
import avatar from '../../assets/avatar.png'

const Header = ({ role, id, employee }) => {

  const [response, setResponse] = useState()
  const [errorMessage, setErrorMessage] = useState();
  const navigation = useNavigate();

  const handleSignOut = async () => {
    localStorage.removeItem('athena-token')
    await signOut(setResponse, role);
  }

  useEffect(() => {
    // console.log(response)
    if(response?.signOutSuccess) {
      navigation('/sign-in')
    }
  }, [response, navigation])

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100" xml:space="preserve" y="0" x="0" id="Layer_1" version="1.1" viewBox="-10.226595 -12.5 88.63049 75"><style id="style13613" type="text/css">.st0{fill:#b2ba21}.st1{fill:#544e47}</style><path id="path13615" d="M67.6062 25.37c-.7-.05-1.4.08-2.12.06-2.2.06-4.43-.3-6.5-1.1-.17-.1-.4-.15-.5-.36-.35-.67-.5-1.4-.67-2.14.83-1.1 1.04-2.5.95-3.83-.15-2.14-.7-4.22-1.3-6.28-.7.92-1.13 2-1.43 3.1-1.04-.43-2.13-.73-3.23-.97-.02.37-.03.73-.03 1.1 1.05.3 2.08.64 3.07 1.1-.12 1.75.2 3.55 1.1 5.08.5.75.55 1.68.8 2.53-2.26-1-4.07-3-4.84-5.33-.6-1.97-.57-4.1-.26-6.12.13-.5.16-1.1.48-1.54.74-.2 1.53-.46 2.3-.28 2.12.33 4.26-.34 6.08-1.4.9-.55 1.8-1.2 2.45-2.06-1.14.04-2.28.17-3.4.3-1.42.18-2.87.45-4.08 1.25-.57.34-1.02.84-1.57 1.2-.52.26-1.12.3-1.68.42.68-1.7 1.82-3.17 3.26-4.28 1.5.32 3-.3 4.25-1.07 1.82-1.1 3.4-2.53 4.98-3.94-2.44-.35-5 .3-6.96 1.8-1.04.76-1.83 1.78-2.52 2.85-1 .77-1.92 1.66-2.7 2.68-.04-.66-.17-1.3-.3-1.94.23-.34.6-.6.7-1.02.17-.8-.22-1.67-.93-2.06-.8-.42-1.94 0-2.2.9-.42 1.16.64 2.6 1.92 2.3.23 1.07.55 2.26.02 3.3-.28.6-.48 1.24-.75 1.85-.2-.34-.52-.66-.5-1.07.02-.98-.24-1.96-.77-2.78-1.13-1.84-3.1-3.04-5.18-3.53.82 1.54 1.58 3.13 2.57 4.58.7 1.02 1.63 2.02 2.92 2.17.5.84.9 1.8.63 2.8-1.03-.16-2.06-.27-3.1-.4.22.35.4.72.66 1.03.78.17 1.57.26 2.35.4-.04 1.25-.02 2.5.3 3.7.12.5.37.97.36 1.5-.73-.3-1.4-.7-2.03-1.16-.6-3.57-2.8-6.58-5.1-9.27-.18 1.15-.17 2.32-.07 3.47-.84-.16-1.73-.2-2.52-.54-.35-.55-.58-1.17-.8-1.8-.12-.23.04-.47.1-.7.53-1.37.3-2.88 0-4.27-.5-1.9-1.24-3.76-2.07-5.55-.03 0-.1-.04-.13-.05-.55 1.25-.97 2.6-.95 3.97-.05 2.18 1 4.2 2.13 5.98.46.65.7 1.4.94 2.15-2.18-.65-3.85-2.46-4.82-4.46-.43-1.1-1.2-2.02-2.16-2.7-1.96-1.45-4.45-2.06-6.87-1.96 1.16 1.26 2.34 2.53 3.77 3.48 1.3.88 2.87 1.23 4.42 1.4.34 0 .58.25.72.54.63 1.22 1.5 2.3 2.56 3.18-.6-.12-1.2-.22-1.72-.58-2.22-1.35-5-1.36-7.45-.7-.83.23-1.72.38-2.43.9 1.56 1.18 3.55 1.8 5.52 1.68 1.56-.06 3.05-.57 4.5-1.08 1.27.14 2.5.48 3.67.98 1.2.5 2.47.76 3.74.97.4 1.78 1.2 3.6 2.73 4.68.62.46 1.4.64 2.12.84.76.4 1.48.88 2.27 1.22.77.32 1.07 1.18 1.6 1.78-.54.04-1.08.1-1.6.17-.68-.93-2.13-.88-2.83-.02-.68.76-.32 2.12.64 2.46 1.2.5 2.77-.63 2.37-1.97.67-.12 1.35-.15 2.02-.03 1.6 1.62 3.7 2.72 5.87 3.38 2.5.72 5.2 1.02 7.8.64.02-.56-.25-1.1-.56-1.55zm-10.18-4.7c-.37-.9-.4-1.9-.47-2.86-.02-1.34-.02-2.72.27-4.04.1 1.7.22 3.4.3 5.1.03.6 0 1.22-.1 1.82zm4.6-12.85c-1.7 1.07-3.68 1.67-5.66 1.96l-.03-.18c1.94-.47 3.77-1.26 5.7-1.78zm-2.84-4.26c1.34-.8 2.78-1.5 4.32-1.86-.7.52-1.55.84-2.3 1.28-1.32.67-2.57 1.46-3.92 2.03.54-.6 1.23-1 1.9-1.44zm-7.6.86c-.5-.34.1-.78.48-.87.37-.1.7.12 1 .3-.55 0-1.07.18-1.47.57zm-2.54 3.35c-.65-.87-1.42-1.63-2.14-2.43 1.77 1.1 3.3 2.75 4.03 4.73-.73-.68-1.26-1.54-1.9-2.3zm-8.88-1.13c-.34-1.5-.55-3.06-.4-4.6.45 2.38 1.07 4.73 1.35 7.14-.48-.77-.7-1.67-.94-2.54zm-7.86-1.34c-.86-.53-1.74-1-2.55-1.57 2.23.6 4.37 1.73 6.02 3.36-1.24-.44-2.35-1.15-3.48-1.8zm-.94 6.25c-.61-.04-1.23-.1-1.83-.27 2.3-.17 4.64-.2 6.94.1-1.67.36-3.4.3-5.1.17zm15.56 3.38c-.5-1.14-.97-2.3-1.15-3.54.57 1.2 1.1 2.43 1.78 3.58.57 1.05 1.25 2.05 1.68 3.18-1.07-.82-1.73-2.05-2.3-3.23zm3.14 8.4l-.3-.3c.4-.62 1.2-.8 1.83-.48-.56.2-1.13.36-1.54.8z" class="st0"/><path id="path13617" d="M59.0462 16.46c.1.63.16 1.26.18 1.9 1.04 1.05 1.75 2.36 2.44 3.66.48-.02.97-.15 1.4-.36-.8-2.07-2.28-3.84-4.02-5.2zm-37.44 30.94v2.55h.55v-2.57zm18.54 0v1.56c-.4-.52-.8-1.04-1.18-1.56h-.53v2.55h.57v-1.6l1.2 1.6h.5c-.02-.86 0-1.7-.02-2.56h-.54zm7.1 2.55h.55c0-.85-.02-1.7 0-2.54h-.56v2.55zm9.91-1.55h-1.05v-1h-.54v2.54c.18 0 .36 0 .55.02v-1.04h1.05v1.02h.57V47.4h-.58v1zm6.79-1v1.5c-.44-.47-.82-1-1.2-1.5h-.5v2.55h.54v-1.62c.4.5.76 1.06 1.2 1.55l.5.12v-2.6h-.54zm-40.6.5h.8c0 .68 0 1.36-.02 2.04.14 0 .42 0 .56.02v-2.04c.25 0 .5 0 .75-.04 0-.12.04-.36.05-.48h-2.13v.5zm3.83-.53l-1.1 2.6c.14-.02.45-.03.6-.04.06-.2.12-.37.2-.55h1.05c.15.38.37.7.86.6-.35-.87-.74-1.72-1.1-2.6h-.5zm-.1 1.5l.33-.8.36.8h-.7zm3.38-1.47h-.55v2.55h1.84v-.5h-1.3V47.4zm2.45 0v2.55h.57V47.4h-.58zm2.8-.02c-.37.86-.72 1.72-1.1 2.57h.6l.2-.57h1.1l.22.56h.6c-.38-.84-.74-1.7-1.1-2.57h-.52zm-.1 1.5l.34-.8.37.8h-.7zm10.5-1.51c-.83-.17-1.2.67-1.72 1.13v-1.1h-.57c0 .85 0 1.7.02 2.54h.56c0-.4-.02-.8.27-1.12l.82 1.13h.67c-.35-.5-.72-1-1.1-1.48.37-.36.73-.72 1.07-1.1zm4.94.04c-.68-.03-1.37 0-2.06 0v.5h.78v2.04h.56v-2.03h.84l-.12-.48zm1.56 1.43c-.17-.84.86-1.26 1.45-.72l.34-.4c-.5-.38-1.24-.53-1.8-.16-.75.47-.76 1.7-.02 2.2.57.4 1.34.23 1.84-.2l-.36-.36c-.48.4-1.3.35-1.45-.36zm8.4-1.44h-1.95v2.54h1.95v-.5h-1.4l.02-.54h1.2v-.5c-.4 0-.8 0-1.2.02v-.53h1.33l.06-.5z" class="st0"/><path id="path13619" d="M23.3862 25.24c1.24.37 2.6-.1 3.48-1-.2-.58-.43-1.16-.68-1.72-.45.4-.86.92-1.48 1.08-.56.17-1.22-.02-1.56-.5-.48-.67-.56-1.53-.58-2.33-.02-1.55 0-3.1-.02-4.64-.56-.02-1.13-.02-1.7 0 .03 1.95-.1 3.92.1 5.87-.8 1.1-2.15 1.88-3.53 1.6-.57-.1-.93-.6-1.23-1.05 1.62-2.42 2.7-5.26 2.8-8.2.03-1.22-.15-2.6-1.1-3.48-.74-.75-2.05-.7-2.8.04-.85.85-1.02 2.14-1.08 3.3 0 2-.02 4.03 0 6.05.08 1.47.35 3.07 1.43 4.16.98 1 2.5 1.13 3.8.8.9-.2 1.65-.73 2.34-1.32.45.62 1.05 1.18 1.8 1.36zm-7.68-10.7c0-.9.07-1.94.78-2.6.85.63.8 1.8.77 2.76-.16 2-.64 3.97-1.54 5.75v-5.9zm-4.73 9.22c1.44-1.53 2-3.7 1.94-5.77-.03-2-.5-4.12-1.85-5.66-1-1.17-2.57-1.8-4.1-1.68-1.2.03-2.43.7-2.92 1.84-.6 1.28-.2 3 1 3.76 1.23.8 2.85.54 4.08-.1l-.6-1.53c-.77.26-1.64.63-2.42.25-.9-.46-.77-1.9.12-2.3 1.2-.55 2.7-.07 3.54.9 1 1.15 1.36 2.7 1.46 4.18.1 1.67-.22 3.5-1.36 4.78-1.7 1.96-5.12 1.96-6.77-.05-1.9-2.34-1.75-5.97.07-8.3-.2-.6-.44-1.17-.7-1.73-1.93 1.79-2.69 4.55-2.41 7.05.18 1.78.93 3.55 2.3 4.73 2.38 2.1 6.43 1.96 8.6-.37z" class="st1"/><path id="path13621" d="M22.6762 13.85c.2-.8-.8-1.47-1.48-1.02-.58.3-.65 1.2-.14 1.6.54.5 1.52.15 1.6-.58zm7.13 11.4c1.52-1.94 2.87-4.15 3.14-6.65.4.37.83.74 1.26 1.1-.15 1.32 0 2.74.78 3.85.85 1.3 2.46 1.92 3.98 1.8 1.45-.03 2.8-.7 3.83-1.7-.22-.57-.45-1.14-.7-1.7-.64.55-1.22 1.2-2.04 1.47-1.07.37-2.42.38-3.3-.45-.64-.58-.87-1.48-.93-2.33 1.58.67 3.57.82 4.97-.3 1.22-.96 1.3-2.96.22-4.03-1.06-1.03-2.78-1.16-4.1-.58-1.02.43-1.74 1.33-2.24 2.3-.8-.68-1.48-1.46-2.15-2.26-.55-.02-1.1.3-1.63.45.94 2.45-.2 5.06-1.64 7.05-.86-2.45-1.83-4.86-3.07-7.15-.64 0-1.27 0-1.9.05 1.57 2.9 2.9 5.93 3.85 9.1h1.65zm8.3-8.1c.65-.13 1.47-.04 1.85.57.3.5.04 1.2-.5 1.45-1.04.54-2.26.23-3.28-.2.32-.86 1-1.67 1.94-1.83zm-20.86 15.25c-.04 1-.17 2-.6 2.9-.52 1.25-1.54 2.32-2.86 2.72-1.35.4-2.94.25-4.07-.64-.9-.7-1.43-1.8-1.62-2.92-.27-1.78.02-3.73 1.15-5.2 1.2-1.6 3.53-2.23 5.35-1.4.96.4 1.43 1.63 1 2.6-.2.56-.73.87-1.14 1.26.14.52.38 1 .58 1.52 1.45-.56 2.5-2.06 2.42-3.63.02-1.45-.95-2.82-2.28-3.37-2.68-1.12-6.1-.1-7.62 2.4-1.13 1.78-1.47 3.98-1.17 6.04.23 1.42.86 2.8 1.93 3.8 1.6 1.46 4.02 1.82 6.04 1.14 1.18-.4 2.13-1.26 2.87-2.24-.02 1.4.16 2.86-.4 4.17-.25.63-.85 1.12-1.55 1.14-.7.1-1.3-.28-1.87-.63l-.65 1.6c1.4 1 3.5 1.02 4.78-.16 1.13-1.06 1.38-2.7 1.42-4.18 0-2.3.02-4.6 0-6.9h-1.68zm49.49 5.03c-.44.47-1.16.82-1.77.5-.62-.5-.45-1.4-.48-2.1-.05-1.4.22-2.92-.5-4.2-.62-1.1-2-1.5-3.18-1.36-.8.08-1.52.52-2.15 1.02v-.93c-.56-.02-1.13-.02-1.7 0v3.56c0 .4.04.83-.16 1.2-.66 1.35-1.85 2.54-3.36 2.83-.95.18-2.07.1-2.8-.6-.52-.48-.7-1.2-.85-1.86 1.45.47 3.2.7 4.54-.22 1.4-.9 1.66-3.14.4-4.3-1.56-1.48-4.3-.97-5.58.66-1.24 1.55-1.35 3.77-.65 5.57-.4.4-.92.96-1.55.7-.66-.36-.73-1.22-.78-1.9-.03-3.4 0-6.83-.02-10.26h-1.68c-.02 1.77 0 3.53 0 5.3-.97-.74-2.22-1.14-3.42-.84-1.53.26-2.67 1.6-3 3.07-.4 1.7-.27 3.66.83 5.08.97 1.27 2.8 1.7 4.28 1.2.74-.25 1.33-.8 1.85-1.35.4.65.97 1.3 1.76 1.43 1.04.24 2-.37 2.74-1.05 1.3 1.2 3.27 1.45 4.9.88 1.03-.35 1.85-1.1 2.56-1.9v1.98h1.68c.05-1.4 0-2.8.02-4.23.03-1.12.5-2.28 1.43-2.96.56-.43 1.36-.52 2-.2.4.2.6.67.64 1.1.12 1.38-.07 2.78.1 4.15.13 1.1.98 2.18 2.15 2.3 1.18.24 2.35-.36 3.14-1.22-.24-.52-.42-1.05-.67-1.56-.33-.02-.5.35-.74.5zm-15.53-5.33c.72-.34 1.7-.45 2.33.1.57.47.34 1.47-.32 1.76-1.04.52-2.27.16-3.27-.3.3-.6.65-1.24 1.28-1.55zm-7.7 5.3c-.87.92-2.56.86-3.3-.18-.65-.92-.74-2.12-.57-3.2.15-.86.62-1.77 1.5-2.07.73-.25 1.62-.15 2.2.37.72.6 1 1.57 1 2.47.05.92-.17 1.92-.84 2.6z" class="st1"/><path id="path13623" d="M39.5062 40.84c-1.14-.43-2-1.45-2.38-2.6-.67-1.88-.3-3.9-.45-5.85-.06-.74-.5-1.43-1.2-1.72-.92-.43-1.97-.06-2.92-.37-.45-.1-.72-.5-1-.85-.52.16-1.04.32-1.56.5.56 1.96.72 4.03.5 6.06-.1.64-.2 1.32-.62 1.8-.3.34-.86.3-1.14-.03-.5-.58-.5-1.4-.56-2.12v-5.3c-.55 0-1.1-.03-1.63 0-.04.2-.08.4-.1.62-1.38-1.1-3.5-1.16-4.9-.08-1.08.82-1.57 2.22-1.65 3.55-.08 1.42.2 2.97 1.17 4.07.97 1.12 2.64 1.48 4.04 1.05.78-.24 1.4-.8 1.92-1.37.3.42.58.87 1.03 1.15.95.65 2.4.5 3.14-.4.73-.86.93-2.02 1.05-3.12.1-1.3.06-2.6-.1-3.87.7.17 1.44.23 2.16.2.26 0 .66.05.66.38.1 1.82-.13 3.68.3 5.47.36 1.54 1.2 3 2.54 3.87 1.62 1.1 3.72 1.2 5.57.75-.05-.57-.36-1.07-.57-1.6-1.1.18-2.25.23-3.3-.18zm-13.83-3.6c-.8 1.1-2.68 1.08-3.46-.05-.63-.96-.7-2.2-.5-3.3.16-.8.62-1.64 1.43-1.94.94-.36 2.1-.04 2.65.82.86 1.3.85 3.2-.1 4.45z" class="st1"/></svg>`

  return (
    <Container position="relative" maxW='full' minHeight={'85'} padding="0px 64px" bgColor={'white'} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.1)">
      <Box display="flex" justifyContent='flex-start' alignItems='center' dangerouslySetInnerHTML={{ __html: svg}}>
        
      </Box>
      <div style={{ position: 'absolute', color: 'red', top: '110%', right: '20px'}}>{errorMessage}</div>
      <Box height="100%" display="flex" justifyContent='center' alignItems='flex-end' color="black" paddingBottom="12px">
        <Box height="full" display="flex" flexDirection="column" justifyContent='flex-end'>
          <Text fontSize="12px" fontWeight="normal">{employee?.ATH} Token</Text>
          <Text fontSize="24px" fontWeight="bold" lineHeight={'100%'}>{employee?.name.toUpperCase()}</Text>
        </Box>
        <Menu bgColor="red">
          {/* <MenuButton as={Button} backgroundColor="red" borderRadius="1000px">
            <Image src={avatar} alt="avatar" width="65px" />
          </MenuButton> */}
            
          <MenuButton bgColor="transparent" height="65px" width="65px" borderRadius="100%" as={Button} rightIcon={<Image src={avatar} alt="avatar" height="50px" />}>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSignOut()}>
            Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  )
}

export default Header