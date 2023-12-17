import { Component } from "react";

class Buton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor çalıştı");
  }

  // component ilk kez oluştuğunda çalışır
  // veri çekme istedi atılırken çokça kullanılır
  componentDidMount() {
    console.log("Component did mount çalıştı");
  }

  // component her durum değiştiğinde çalışır
  // bileşen içinde state değiştiğinde çalışır
  componentDidUpdate() {
    console.log("Component did update çalıştı");
  }

  // bileşen ekrandan gittiğinde çalışır
  componentWillUnmount() {
    console.log("ComponentWillUnmount çalıştı");
  }

  handleButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render çalıştı");
    return (
      <div>
        <p>Butona {this.state.count} kez tıklandı</p>
        <button onClick={this.handleButton}>Bana Tıkla</button>
      </div>
    );
  }
}

export default Buton;
