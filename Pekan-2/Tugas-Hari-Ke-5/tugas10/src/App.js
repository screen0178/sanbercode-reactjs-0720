import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>
      <form>
        <table>
          <tr>
            <td><label for="nama"><b>Nama Pelanggan</b></label></td>
            <td><input type="text" id="nama" name="nama"/></td>
          </tr>
          <tr valign="bottom">
            <td><label for="jenisKelamin"><b>Jenis Kelamin</b></label></td>
            <td align="left">
              <input type="checkbox" id="semangka" name="gender" value="Semangka"/>
              <label for="semangka">Semangka</label><br></br>
              <input type="checkbox" id="jeruk" name="gender" value="Jeruk"/>
              <label for="jeruk">Jeruk</label><br></br>
              <input type="checkbox" id="nanas" name="nanas" value="Nanas"/>
              <label for="nanas">Nanas</label><br></br>
              <input type="checkbox" id="salak" name="salak" value="Salak"/>
              <label for="salak">Salak</label><br></br>
              <input type="checkbox" id="anggur" name="anggur" value="Anggur"/>
              <label for="anggur">Anggur</label><br></br>
            </td>
          </tr>
          <tr>
            <td><input type="submit" value="Kirim"/></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default App;
