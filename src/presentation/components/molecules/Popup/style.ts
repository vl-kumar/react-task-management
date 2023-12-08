import styled from "styled-components";

export const Overlay = styled.div((props) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const Modal = styled.div((props) => ({
    backgroundColor: 'white',
    padding: '20px',
    paddingTop: '30px',
    paddingBottom: '30px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '500px'
}))

export const CloseButton = styled.div((props) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
}))