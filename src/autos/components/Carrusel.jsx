import React, { useState } from 'react'
import Modal from "react-modal"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/Carrusel.css'

const customStyles = {
    content: {
        height: '30rem',
        width: '60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        borderRadius: '5px',
        boxShadow: '2px 2px 14px -1px rgba(92,92,92,0.7)',
    }
};

Modal.setAppElement('#root')

const Carrusel = ({ imagenes }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <div>
            <button className='open-galery-button' onClick={openModal}> Ver Mas </button>

            <Modal className={"window"}
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="detalles carrusel"
            >

                <Carousel className='carousel' useKeyboardArrows={true}>
                    {imagenes.map(img => (<img src={img.url} key={img.id} alt='img auto' />))}
                </Carousel>

            </Modal>

        </div>
    )
}

export default Carrusel