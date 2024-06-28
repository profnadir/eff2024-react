import React, { useState } from 'react';

const Formulaire = () => {
  const [theme, setTheme] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [coutJournalier, setCoutJournalier] = useState('');
  const [expert, setExpert] = useState('');
  const [duration, setDuration] = useState(0);
  const [coutTotal, setCoutTotal] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleConfirm = () => {
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const timeDiff = Math.abs(endDate - startDate);
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Inclure le jour de début
    setDuration(days);
    setCoutTotal(days * coutJournalier);
    setShowInfo(true);
  };

  return (
    <div>
        <h2>Formulaire de saisie d'événement</h2>
      <form>
        <div>
          <label>Thème de l'événement:</label>
          <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
        </div>
        <div>
          <label>Date de début:</label>
          <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
        </div>
        <div>
          <label>Date de fin:</label>
          <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
        </div>
        <div>
          <label>Coût journalier (DH):</label>
          <input type="number" value={coutJournalier} onChange={(e) => setCoutJournalier(e.target.value)} />
        </div>
        <div>
          <label>Expert:</label>
          <input type="text" value={expert} onChange={(e) => setExpert(e.target.value)} />
        </div>
        <button type="button" onClick={handleConfirm}>Confirmer</button>
      </form>

      {showInfo && (
        <div>
          <p>L'expert {expert} assurera le thème {theme} avec un coût journalier de {coutJournalier} DH, pour une durée de {duration} jours, soit un coût total de {coutTotal} DH.</p>
        </div>
      )}
    </div>
  );
};

export default Formulaire;

