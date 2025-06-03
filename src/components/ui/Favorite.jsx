import heartImg from '../../assets/img/heart.svg';

export default function Favorite({ toggleModal }) {
    return (
        <div
            onClick={toggleModal}
            className="p-2 hover:bg-gray-600 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heartImg} alt="" />
            <span>Favorite Locations</span>
        </div>
    );
}