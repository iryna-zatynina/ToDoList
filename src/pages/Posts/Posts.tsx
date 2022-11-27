import React, {useEffect, useMemo, useRef, useState} from 'react';
import "./Posts.scss"

import {ProgressBar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useTranslation} from "react-i18next";

const PostsList = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import("../../components/PostsList/PostsList"))
    }, 2000)
}))




const Posts = () => {

    useEffect(() => {
        console.log(span.current);
    }, [])

    const [showModal, setShowModal] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(20);
    const [colored, setColored] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);

    const styles = {
        color: colored ? "red" : "blue"
    }

    const complexCulculate = (num: number): number => {
        let i = 0;
        while (i < 1000000000) i++;
        return num * 2
    }

    const newNumber = useMemo(() => {
        return complexCulculate(number)
    }, [number])

    const span = useRef<HTMLInputElement | null>(null);
    const now = 10;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {t, i18n} = useTranslation();

    return (

        <React.Fragment>
            <div className="Posts">
                {/*    <span className="link"><Link to={"/"}>Перейти на сторінку списку завдань</Link></span>*/}
                {/*    <h1>Posts</h1>*/}
                {/*    <React.Suspense fallback={<p>loading</p>}>*/}
                {/*        <PostsList />*/}
                {/*    </React.Suspense>*/}
                {/*    <button onClick={() => setShowModal(true)}>Open modal</button>*/}
                {/*</div>*/}

                <span ref={span} style={styles}>Число: {newNumber}</span>
                <button onClick={() => setNumber(prevState => prevState + 1)}>Добавити</button>
                <button onClick={() => setNumber(prevState => prevState - 1)}>Видалити</button>
                <button onClick={() => setColored(prevState => !prevState)}>Змінити колір</button>

                <ProgressBar now={now} label={`${now}%`}/>

                <Button variant="primary" onClick={handleShow}>
                    {t("hi")}
                </Button>
                <Button variant="primary" onClick={() => i18n.language === "en" ? i18n.changeLanguage("ua") :
                    i18n.changeLanguage("en")}>
                    Поміняти мову
                </Button>
            </div>
            {showModal && <Modal closeModal={setShowModal}/>}
            {show && <BootstrapModal show={show} handleClose={handleClose} />}
        </React.Fragment>
    );
};

const BootstrapModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Posts;