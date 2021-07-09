<?php
    // On sunday return value of ticket counter to zero 
  if (date("l") === "Sunday")
  {
    echo "Its sunday!";
  }
  else
  {
    echo "It's not sunday :(";
  }
