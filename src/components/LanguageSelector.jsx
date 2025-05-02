export default function LanguageSelector() {
  return (
    <div>
      <label htmlFor="talen">Kies een taal:</label>

      <select className="bg-blue-400" name="talen" id="taal">
        <option value="nederlands">Nederlands</option>
        <option value="engels">English</option>
        <option value="spaans">Espanol</option>
        <option value="duits">Deutsch</option>
      </select>
      <br />

      <input
        type="submit"
        className="bg-blue-900 border-blue-500 border-4 "
        value="Confirm"
        // onClick={langaugehandle}
      ></input>
    </div>
  );
}
