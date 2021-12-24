    $(".banking").hide();
    $(".ssc-exams").show();
    $("#ssc").click(function() {
      $(".banking").hide();
      $(".ssc-exams").show();
    })
    $("#banking").click(function() {
      $(".ssc-exams").hide();
      $(".banking").show();
    })
