document.getElementById('severity').addEventListener('input', function() {
    document.getElementById('severityValue').textContent = this.value;
});

// ページ読み込み時に保存されたデータを表示
document.addEventListener('DOMContentLoaded', function() {
    const savedSymptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    const symptomList = document.getElementById('symptomList');
    
    savedSymptoms.forEach(({ symptom, severity }) => {
        const symptomItem = document.createElement('div');
        symptomItem.className = 'symptom-item';
        
        const symptomName = document.createElement('div');
        symptomName.className = 'symptom-name';
        symptomName.textContent = symptom;
        
        const symptomBar = document.createElement('div');
        symptomBar.className = 'symptom-bar';
        
        const barFill = document.createElement('div');
        barFill.className = 'bar-fill';
        barFill.style.width = `${severity * 10}%`;
        
        const severityNumber = document.createElement('div');
        severityNumber.className = 'severity-number';
        severityNumber.textContent = severity;
        
        symptomBar.appendChild(barFill);
        symptomItem.appendChild(symptomName);
        symptomItem.appendChild(symptomBar);
        symptomItem.appendChild(severityNumber);
        
        symptomList.appendChild(symptomItem);
    });
});

document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const symptom = document.getElementById('symptom').value;
    const severity = document.getElementById('severity').value;
    
    // localStorageに保存
    const savedSymptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    savedSymptoms.push({ symptom, severity });
    localStorage.setItem('symptoms', JSON.stringify(savedSymptoms));
    
    // 画面に追加
    const symptomItem = document.createElement('div');
    symptomItem.className = 'symptom-item';
    
    const symptomName = document.createElement('div');
    symptomName.className = 'symptom-name';
    symptomName.textContent = symptom;
    
    const symptomBar = document.createElement('div');
    symptomBar.className = 'symptom-bar';
    
    const barFill = document.createElement('div');
    barFill.className = 'bar-fill';
    barFill.style.width = `${severity * 10}%`;
    
    const severityNumber = document.createElement('div');
    severityNumber.className = 'severity-number';
    severityNumber.textContent = severity;
    
    symptomBar.appendChild(barFill);
    symptomItem.appendChild(symptomName);
    symptomItem.appendChild(symptomBar);
    symptomItem.appendChild(severityNumber);
    
    document.getElementById('symptomList').appendChild(symptomItem);
    
    // フォームをリセット
    document.getElementById('symptomForm').reset();
    document.getElementById('severityValue').textContent = '1';
});
