import heartImg from '../../assets/img/heart.svg';

export default function Favorite() {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heartImg} alt="" />
            <span>Favorite Locations</span>
        </div>
    );
}