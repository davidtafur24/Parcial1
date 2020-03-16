cd C:\Users\ameji\AppData\Local\Android\Sdk\platform-tools
adb -s emulator-5556 install C:\Users\ameji\Documents\PruebasAutomaticas\Parcial\RedReader-modificada.apk

::adb -s emulator-5556 shell monkey -p org.quantumbadger.redreader -s 15474574854 -v 5000000 >> C:\Users\ameji\Documents\resultsRedHeader1.txt
::adb shell monkey -p org.wikipedia -v 5000000 >> C:\Users\ameji\Documents\PruebasAutomaticas\Parcial\resultsRedHeader.txt


adb -s emulator-5556 shell monkey -p org.quantumbadger.redreader -s 15474574854 -v 5000000
PAUSE