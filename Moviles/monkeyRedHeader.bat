cd C:\Users\ameji\AppData\Local\Android\Sdk\platform-tools
adb -s emulator-5554 install C:\Users\ameji\Documents\PruebasAutomaticas\Parcial\RedReader-limpia.apk

::adb -s emulator-5554 shell monkey -p org.quantumbadger.redreader -s 15474574854 -v 5000000 >> C:\Users\ameji\Documents\resultsRedHeader1.txt
::adb shell monkey -p org.wikipedia -v 5000000 >> C:\Users\ameji\Documents\PruebasAutomaticas\Parcial\resultsRedHeader.txt

adb -s emulator-5554 shell monkey -p org.quantumbadger.redreader -s 15474574854 -v 5000000 
PAUSE