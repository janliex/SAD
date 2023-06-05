import Item from "./Item";
const List = ({ listData, deleteData, submittingStatus }) => {
    return (
        <div className="list">
            {listData.map((item) => {
                const { number, name, dep, address, id } = item;
                return (
                    <Item
                        title={'My Student Card'}
                        description={"這是我的學生證"}
                        imag={'https://gateway.pinata.cloud/ipfs/QmNo2R7zNgAcMf2kyChiTjdDRfvEL1kK9TtQeJuSWQkxiU?_gl=1*168rv2k*rs_ga*ODBlODA5N2ItY2MxMy00ODU0LTg2OTQtM2QwODdjMTVkZGY0*rs_ga_5RMPXG14TE*MTY4NTQyODYxNS4yNy4xLjE2ODU0MzM0ODIuNjAuMC4w'}
                        key={id}
                        id={id}
                        number={number}
                        name={name}
                        dep={dep}
                        address={address}
                        deleteData={deleteData}
                        submittingStatus={submittingStatus}
                    />
                );
            })}
        </div>
    );
};

export default List;
