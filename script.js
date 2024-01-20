document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.getElementById('generateBtn');
    var container = document.getElementById('lottoContainer');

    button.addEventListener('click', function() {
        // 기존에 표시된 번호를 모두 지웁니다.
        container.innerHTML = "";

        // 1부터 45까지의 숫자를 생성합니다.
        var numbers = Array(45).fill().map((v, i) => i + 1);

        // 숫자를 무작위로 섞습니다.
        numbers.sort(function() {
            return Math.random() - 0.5;
        });

        // 섞인 숫자 중에서 앞의 6개를 추출합니다.
        var lottoNumbers = numbers.slice(0, 6);

        // 추출된 번호를 동그란 공에 표시합니다.
        lottoNumbers.forEach(function(number) {
            var ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = number;
            ball.style.backgroundColor = 'hsl(' + number * 8 + ', 100%, 50%)';
            container.appendChild(ball);
        });
    });
});