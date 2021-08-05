export default function Translate(p) {
    if(typeof p == "string") {
        //titles
        if(p.match(/Home\/Draw/)) return p.replace('Home/Draw', 'Casa / Empate')
        if(p.match(/Home\/Away/)) return p.replace('Home/Away', 'Casa / Fora')
        if(p.match(/Home\/home/)) return p.replace('Home/home', 'Casa / Casa')
        if(p.match(/Home\/yes/)) return p.replace('Home/yes', 'Casa / Sim')
        if(p.match(/Home\/no/)) return p.replace('Home/no', 'Casa / Não')

        if(p.match(/Draw\/Draw/)) return p.replace('Draw/Draw', 'Empate / Empate')
        if(p.match(/Draw\/Away/)) return p.replace('Draw/Away', 'Empate / Fora')
        if(p.match(/Draw\/home/)) return p.replace('Draw/home', 'Empate / Casa')
        if(p.match(/Draw\/yes/)) return p.replace('Draw/yes', 'Empate / Sim')
        if(p.match(/Draw\/no/)) return p.replace('Draw/no', 'Empate / Não')
        
        if(p.match(/Away\/Draw/)) return p.replace('Away/Draw', 'Fora / Empate')
        if(p.match(/Away\/Away/)) return p.replace('Away/Away', 'Fora / Fora')
        if(p.match(/Away\/home/)) return p.replace('Away/home', 'Fora / Casa')
        if(p.match(/Away\/yes/)) return p.replace('Away/yes', 'Fora / Sim')
        if(p.match(/Away\/no/)) return p.replace('Away/no', 'Fora / Não')

        if(p.match(/Match Winner/)) return p.replace('Match Winner', 'Vencedor da Partida')
        if(p.match(/Away Team Score a Goal/)) return p.replace('Away Team Score a Goal', 'Equipe ausente marca um gol')
        if(p.match(/Odd\/Even/)) return p.replace('Odd/Even', 'Ímpar ou Par')
        if(p.match(/Exact Goals Number - First Half/)) return p.replace('Exact Goals Number - First Half', 'Número exato de gols - primeira partida')
        if(p.match(/First Half Winner/)) return p.replace('First Half Winner', 'Vencedor do primeiro tempo')
        if(p.match(/Second Half Winner/)) return p.replace('Second Half Winner', 'Vencedor do segundo tempo')
        if(p.match(/Double Chance/)) return p.replace('Double Chance', 'Chance Dupla')
        if(p.match(/Correct Score - First Half/)) return p.replace('Correct Score - First Half', 'Pontuação correta - primeiro tempo')
        if(p.match(/Both Teams Score/)) return p.replace('Both Teams Score', 'Ambas as equipes pontuam')
        if(p.match(/Goals Over\/Under First Half/)) return p.replace('Goals Over/Under First Half', 'Gols Acima/Abaixo Primeiro Tempo')
        if(p.match(/Goals Over\/Under First Half/)) return p.replace('Goals Over/Under Second Half', 'Gols Acima/Abaixo Segundo Tempo')
        if(p.match(/Exact Score/)) return p.replace('Exact Score', 'Pontuação Exata')
        if(p.match(/Double Chance/)) return p.replace('Double Chance', 'Chance Dupla')
        if(p.match(/Goals Over\/Under/)) return p.replace('Goals Over/Under', 'Gols Acima/Abaixo')
        if(p.match(/Home Team Score a Goal/)) return p.replace('Home Team Score a Goal', 'Home Team Score a Goal')
        if(p.match(/Highest Scoring Half/)) return p.replace('Highest Scoring Half', 'Metade de pontuação mais alta')
        if(p.match(/Total - Home/)) return p.replace('Total - Home', 'Total - Casa')
        if(p.match(/Total - Away/)) return p.replace('Total - Away', 'Total - Fora')
        if(p.match(/Double/)) return p.replace('Double', 'Duplo')
        
        //odds
        if(p == "Yes") return "Sim"
        if(p == "No") return "Não"
        if(p == "Home") return "Casa"
        if(p == "Away") return "Fora"
        if(p == "Draw") return "Empate"
        if(p == "Over") return "Acima de"
        if(p == "Under") return "Abaixo de"
        if(p == "Odd") return "Abaixo de"
        if(p == "Even") return "Par"
        if(p == "more") return "mais"
        if(p.match(/Over/)) return p.replace('Over', 'Acima de')
        if(p.match(/Under/)) return p.replace('Under', 'Abaixo de')
    }      
    return p     
}