import React, { useEffect, useMemo, useCallback } from "react";
import { useShallow } from 'zustand/react/shallow'
import useThemeStore from "./../../store/useThemeStore";
import Accordion from 'react-bootstrap/Accordion';
import pattern1 from './../../assets/images/bg-pattern/pattern-06.png'
import pattern2 from './../../assets/images/bg-pattern/pattern-02.png'
import pattern3 from './../../assets/images/bg-pattern/pattern-03.png'
import pattern4 from './../../assets/images/bg-pattern/pattern-04.png'
import pattern5 from './../../assets/images/bg-pattern/pattern-05.png'
import pattern6 from './../../assets/images/bg-pattern/pattern-06.png'
import pattern7 from './../../assets/images/bg-pattern/pattern-07.png'
import pattern8 from './../../assets/images/bg-pattern/pattern-08.png'
import pattern9 from './../../assets/images/bg-pattern/pattern-09.png'

const ThemeManager = () => {
    const { activeColor, setActiveColor, activeImage, setActiveImage, resetTheme } = useThemeStore(
        useShallow((state) =>
        ({
            activeColor: state.activeColor,
            setActiveColor: state.setActiveColor,
            activeImager: state.activeImage,
            setActiveImage: state.setActiveImage,
            resetTheme: state.resetTheme,
        })
        )
    );
    const colors = useMemo(() => ({
        "bgcolor-radio1": "19, 90, 152",
        "bgcolor-radio2": "80, 165, 241",
        "bgcolor-radio4": "97, 83, 204",
        "bgcolor-radio5": "232, 62, 140",
        "bgcolor-radio6": "0, 0, 0",
        "bgcolor-radio7": "121, 124, 140",
    }), []);

    const bgColor = useMemo(() => ({
        "bgcolor-radio1": "rgba(19, 90, 152, 0.05)",
        "bgcolor-radio2": "rgba(80, 165, 241, 0.05)",
        "bgcolor-radio4": "rgba(97, 83, 204, 0.05)",
        "bgcolor-radio5": "rgba(232, 62, 140, 0.05)",
        "bgcolor-radio6": "rgba(0, 0, 0, 0.05)",
        "bgcolor-radio7": "rgba(121, 124, 140, 0.05)",
    }), [])

    const images = useMemo(() => ({
        "bgimg-radio1": `url(${pattern1})`,
        "bgimg-radio2": `url(${pattern2})`,
        "bgimg-radio3": `url(${pattern3})`,
        "bgimg-radio4": `url(${pattern4})`,
        "bgimg-radio5": `url(${pattern5})`,
        "bgimg-radio6": `url(${pattern6})`,
        "bgimg-radio7": `url(${pattern7})`,
        "bgimg-radio8": `url(${pattern8})`,
        "bgimg-radio9": `url(${pattern9})`
    }), []);

    useEffect(() => {
        if (activeColor) {
            applyThemeColor(activeColor);
        }

        if (activeImage) {
            applyThemeImage(activeImage);
        }
    }, [activeColor, activeImage]);

    const applyThemeColor = useCallback((colorRadioId) => {
        const color = colors[colorRadioId];
        const bgcolor = bgColor[colorRadioId];
        if (color) {
            document.documentElement.style.setProperty("--bs-primary-rgb", color);
            document.querySelector(".user-chat").style.backgroundColor = bgcolor;
        }
    }, [colors]);

    const applyThemeImage = useCallback((imageRadioId) => {
        const image = images[imageRadioId];
        if (image) {
            document.querySelector(".user-chat").style.backgroundImage = image;
        }
    }, [images]);

    const handleColorChange = useCallback((event) => {
        const selectedColor = event.target.id;
        setActiveColor(selectedColor);
    }, [setActiveColor]);

    const handleImageChange = useCallback((event) => {
        const selectedImage = event.target.id;
        setActiveImage(selectedImage);
    }, [setActiveImage]);

    const handleReset = useCallback(() => {
        resetTheme();
        document.documentElement.style.removeProperty("--bs-primary-rgb");
        document.querySelector(".user-chat").style.backgroundImage = ""; // Убираем фон
    }, [resetTheme]);

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <i className="bx bxs-adjust-alt text-muted me-3"></i> Themes
                </Accordion.Header>
                <Accordion.Body>
                    <h5 className="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Color :</h5>
                    <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-color-list">
                        {Object.entries(colors).map(([id, color], index) => (
                            <div className="form-check" key={id}>
                                <input
                                    className="form-check-input theme-color"
                                    type="radio"
                                    name="bgcolor-radio"
                                    id={id}
                                    checked={activeColor === id}
                                    onChange={handleColorChange}
                                    value={index}
                                />
                                <label className="form-check-label avatar-xs" htmlFor={id}>
                                    <span className="avatar-title rounded-circle theme-btn" style={{ backgroundColor: `rgba(${color})` }}></span>
                                </label>
                            </div>
                        ))}
                        <div className="form-check">
                            <input
                                className="form-check-input theme-color"
                                type="radio"
                                name="bgcolor-radio"
                                id="reset-color"
                                checked={!activeColor}
                                onChange={handleReset}
                            />
                            <label className="form-check-label avatar-xs" htmlFor="reset-color">
                                <span className="avatar-title bg-light rounded-circle theme-btn"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-4 pt-2">
                        <h5 className="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Image :</h5>
                        <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-btn-list-img">
                            {Object.keys(images).map((id) => (
                                <div className="form-check" key={id}>
                                    <input
                                        className="form-check-input theme-img"
                                        type="radio"
                                        name="bgimg-radio"
                                        id={id}
                                        checked={activeImage === id}
                                        onChange={handleImageChange}
                                    />
                                    <label className="form-check-label avatar-xs" htmlFor={id}>
                                        <span className="avatar-title rounded-circle theme-btn" style={{ backgroundImage: id }}></span>
                                    </label>
                                </div>
                            ))}
                            <div className="form-check">
                                <input
                                    className="form-check-input theme-img"
                                    type="radio"
                                    name="bgimg-radio"
                                    id="reset-image"
                                    checked={!activeImage}
                                    onChange={handleReset}
                                />
                                <label className="form-check-label avatar-xs" htmlFor="reset-image">
                                    <span className="avatar-title bg-light rounded-circle theme-btn"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <i className="bx bxs-help-circle text-muted me-3"></i> Help
                </Accordion.Header>
                <Accordion.Body>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item py-3 px-0 pt-0">
                            <h5 className="font-size-13 mb-0">
                                <a href="#" className="text-body d-block">FAQs</a>
                            </h5>
                        </li>
                        <li className="list-group-item py-3 px-0">
                            <h5 className="font-size-13 mb-0">
                                <a href="#" className="text-body d-block">Contact</a>
                            </h5>
                        </li>
                        <li className="list-group-item py-3 px-0 pb-0">
                            <h5 className="font-size-13 mb-0">
                                <a href="#" className="text-body d-block">Terms & Privacy policy</a>
                            </h5>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ThemeManager;
