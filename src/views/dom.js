//station
export const getStationRow = (stationName) =>
  `<tr><td>${stationName}</td> <td><button data-index=${stationName} class="station-delete-button">삭제</button></td></tr>`;

export const stationMangeContainer = () => {
  const stations = JSON.parse(localStorage.getItem("stations")) || [];
  return `
      <br><b>역 이름</b></br>
      <input id="station-name-input" type="text" placeholder="역 이름을 입력해주세요"/>
      <button id="station-add-button">역 추가</button>
      <h2>🚇 지하철 역 목록</h2>
      <table id="station-list-table">
          <tr><th><b>역 이름</b></th>
          <th><b>설정</b></th></tr>
          ${stations.map((station) => getStationRow(station.name)).join("")}
      </table>`;
};

//line
export const getLineRow = (line) => {
  return `<tr><td>${line.lineName}</td> 
        <td>${line.startStation}</td> 
        <td>${line.endStation}</td> 
        <td><button data-index=${line.lineName} class="line-delete-button">삭제</button></td></tr>`;
};

export const lineMangeContainer = () => {
  const stations = JSON.parse(localStorage.getItem("stations")) || [];
  const lines = JSON.parse(localStorage.getItem("lines")) || [];

  return `
      <br><b>노선 이름</b></br>
      <input id="line-name-input" type="text" placeholder="노선 이름을 입력해주세요"/>
      <br><br>
      <span>상행 종점 <select id="line-start-station-selector">
        ${stations
          .map((station) => `<option>${station.name}</option>`)
          .join("")}</select></span>
      <br>
      <span>하행 종점 <select id="line-end-station-selector">
      ${stations
        .map((station) => `<option>${station.name}</option>`)
        .join("")}</select></span>
      <br><br>
      <button id="line-add-button">노선 추가</button>
      <h2>🚇 지하철 노선 목록</h2>
  
      <table id="line-list-table">
        <tr><th><b>노선 이름</b></th>
            <th><b>상행 종점역</b></th>
            <th><b>하행 종점역</b></th>
            <th><b>설정</b></th></tr>
            ${lines.map((line) => getLineRow(line)).join("")}
      </table>`;
};
