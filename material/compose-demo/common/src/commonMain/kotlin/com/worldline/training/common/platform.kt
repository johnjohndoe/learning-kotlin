package com.worldline.training.common

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.painter.Painter

expect fun getPlatformName(): String

@Composable
expect fun getLogoPainter(): Painter