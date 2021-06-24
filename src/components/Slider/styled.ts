import styled from 'styled-components'

const SliderWrapper = styled.div`
    .slick-list,
    .slick-slider,
    .slick-track {
        position: relative;
        display: block;
    }

    .slick-loading .slick-slide,
    .slick-loading .slick-track {
        visibility: hidden;
    }

    .slick-slider {
        box-sizing: border-box;
        user-select: none;
        touch-action: pan-y;
    }

    .slick-list {
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    .slick-list:focus {
        outline: 0;
    }

    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }

    .slick-slider .slick-list,
    .slick-slider .slick-track {
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        top: 0;
        left: 0;
    }

    .slick-track:after,
    .slick-track:before {
        display: table;
        content: '';
    }

    .slick-track:after {
        clear: both;
    }

    .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
    }

    [dir='rtl'] .slick-slide {
        float: right;
    }

    .slick-slide img {
        display: block;
    }

    .slick-slide.slick-loading img {
        display: none;
    }

    .slick-slide.dragging img {
        pointer-events: none;
    }

    .slick-initialized .slick-slide {
        display: block;
    }

    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }

    .slick-arrow.slick-hidden {
        display: none;
    }

    .slick-dots,
    .slick-next,
    .slick-prev {
        position: absolute;
        display: block;
        padding: 0;
    }

    .slick-dots li button:before,
    .slick-next:before,
    .slick-prev:before {
        font-family: slick;
    }

    .slick-next,
    .slick-prev {
        font-size: 0;
        line-height: 0;
        top: 50%;
        width: 20px;
        height: 20px;
        transform: translate(0, -50%);
        cursor: pointer;
        color: transparent;
        border: none;
        outline: 0;
        background: 0 0;
    }

    .slick-next:focus,
    .slick-next:hover,
    .slick-prev:focus,
    .slick-prev:hover {
        color: transparent;
        outline: 0;
        background: 0 0;
    }

    .slick-next:focus:before,
    .slick-next:hover:before,
    .slick-prev:focus:before,
    .slick-prev:hover:before {
        opacity: 1;
    }

    .slick-next.slick-disabled:before,
    .slick-prev.slick-disabled:before {
        opacity: 0.25;
    }

    .slick-next:before,
    .slick-prev:before {
        font-size: 20px;
        line-height: 1;
        opacity: 0.75;
        color: ${({ theme }) => theme.colors.mainFont};
    }

    .slick-prev {
        left: -25px;
    }

    [dir='rtl'] .slick-prev {
        right: -25px;
        left: auto;
    }

    .slick-prev:before {
        content: '←';
    }

    .slick-next:before,
    [dir='rtl'] .slick-prev:before {
        content: '→';
    }

    .slick-next {
        right: -25px;
    }

    [dir='rtl'] .slick-next {
        right: auto;
        left: -25px;
    }

    [dir='rtl'] .slick-next:before {
        content: '←';
    }

    .slick-dotted.slick-slider {
        margin-bottom: 30px;
    }

    .slick-dots {
        bottom: -25px;
        width: 100%;
        margin: 0;
        list-style: none;
        text-align: center;
    }

    .slick-dots li {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
    }

    .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: 0;
        background: 0 0;
    }

    .slick-dots li button:focus,
    .slick-dots li button:hover {
        outline: 0;
    }

    .slick-dots li button:focus:before,
    .slick-dots li button:hover:before {
        opacity: 1;
    }

    .slick-dots li button:before {
        font-size: 6px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: 0.25;
        color: ${({ theme }) => theme.colors.black};
    }

    .slick-dots li.slick-active button:before {
        opacity: 0.75;
        color: ${({ theme }) => theme.colors.black};
    }
`

export default SliderWrapper
