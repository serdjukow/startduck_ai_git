import LoaderGIF from './../assets/images/loader.gif'

const Loader = () => {
    return (
        <div className='custom-loader'>
            <img src={LoaderGIF} alt="Loader" />
        </div>
    )
}

export default Loader;