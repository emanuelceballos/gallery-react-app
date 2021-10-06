import Card from './Card'
import Loading from './Loading';
import SearchForm from './SearchForm';
import { useFetchImages } from '../hooks/useFetchImages';

const Cards = () => {

    const [images, loading, handleSubmit] = useFetchImages();

    return (
        <>
            <SearchForm handleSubmit={handleSubmit} />
            <hr />

            <div className="order d-flex align-items-center justify-content-center">
                {loading && <Loading />}
            </div>

            <div className="row">
                {
                    images.map((image) => {
                        return <div key={image.id} className="col">
                            <Card img={image.urls.small} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Cards;
