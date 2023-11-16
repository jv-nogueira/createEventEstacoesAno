function criarEventosEstacoesDoAno() {
    // Obtenha o ID do calendário
    var calendarioId = '929dccbe4686318fb55a861f4ea38e625028c47e67ef394dab12f6e144a751cf@group.calendar.google.com';
  
    // Datas de início e fim das estações do ano
    var inicioOutono = new Date(2023, 2, 21); // 21 de março de 2023
    var fimOutono = new Date(2023, 5, 21); // 21 de junho de 2023
  
    var inicioInverno = new Date(2023, 5, 21); // 21 de junho de 2023
    var fimInverno = new Date(2023, 8, 23); // 23 de setembro de 2023
  
    var inicioPrimavera = new Date(2023, 8, 23); // 23 de setembro de 2023
    var fimPrimavera = new Date(2023, 11, 21); // 21 de dezembro de 2023
  
    var inicioVerao = new Date(2023, 11, 21); // 21 de dezembro de 2023
    var fimVerao = new Date(2024, 2, 21); // 21 de março de 2024
  
    // Array com os dados das estações
    var estacoes = [
      {inicio: inicioOutono, fim: fimOutono, nome: 'Outono'},
      {inicio: inicioInverno, fim: fimInverno, nome: 'Inverno'},
      {inicio: inicioPrimavera, fim: fimPrimavera, nome: 'Primavera'},
      {inicio: inicioVerao, fim: fimVerao, nome: 'Verão'}
    ];
  
    // Iterar sobre as estações
    for (var i = 0; i < estacoes.length; i++) {
      var titulo = estacoes[i].nome + ' - Início'; // Ou 'Fim' para o evento de término
  
      // Configura a regra de repetição anual
      var regraRepeticao = CalendarApp.newRecurrence().addYearlyRule();
  
      // Crie o evento no Google Agenda com repetição anual e duração de um dia
      var evento = CalendarApp.getCalendarById(calendarioId).createAllDayEventSeries(titulo, estacoes[i].inicio, regraRepeticao);
  
      // Configuração de notificação
      var minutosAntes = 5; // Aparentemente esse é o mínimo, é melhor pesquisar antes de modificar
      evento.addPopupReminder(minutosAntes); // Configuração da notificação pop-up
      evento.addSmsReminder(minutosAntes); // Configuração da notificação SMS
  
      Logger.log('Evento criado: ' + evento.getTitle());
    }
  }
  