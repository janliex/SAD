
const Item = ({ id, number, name, dep, address, deleteData, submittingStatus }) => {
    function deleteItem() {
        submittingStatus.current = - true
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }
    return (
        <div className="item">
            <div>
                <h1 style={{ color: 'red' }}>{"請確認您的資料輸入正確"}</h1>

                <p>{"學號: "+ number}</p>
                <p>{"姓名: "+ name}</p>
                <p>{"系所: "+ dep}</p>
                <p>{"錢包地址: "+ address}</p>
            </div>
            <button onClick={deleteItem} className="remove">刪除</button>
        </div>
    );
};

export default Item;
